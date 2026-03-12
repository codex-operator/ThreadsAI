class ThreadsAIContentParser {
    estimateByteSize(data) {
        try {
            return new TextEncoder().encode(JSON.stringify(data)).length;
        } catch {
            return Number.MAX_SAFE_INTEGER;
        }
    }

    sanitizeParsedPost(rawPost) {
        if (!rawPost || typeof rawPost !== 'object') return null;

        const rawMedia = Array.isArray(rawPost.media) ? rawPost.media : [];
        const media = rawMedia.slice(0, 10).map(item => {
            if (!item || typeof item !== 'object') return null;
            return {
                type: String(item.type || 'image').slice(0, 50),
                url: String(item.url || '').slice(0, 2000),
                thumbnail: String(item.thumbnail || '')?.slice(0, 2000)
            };
        }).filter(Boolean);

        return {
            id: String(rawPost.id || '').slice(0, 100),
            author: String(rawPost.author || '').slice(0, 100),
            text: String(rawPost.text || '').slice(0, 5000),
            postUrl: String(rawPost.postUrl || '').slice(0, 2000),
            avatarUrl: String(rawPost.avatarUrl || '').slice(0, 2000),
            timeAgo: String(rawPost.timeAgo || '').slice(0, 50),
            datetime: String(rawPost.datetime || '')?.slice(0, 100),
            likes: Number(rawPost.likes) || 0,
            comments: Number(rawPost.comments) || 0,
            reposts: Number(rawPost.reposts) || 0,
            shares: Number(rawPost.shares) || 0,
            isVerified: !!rawPost.isVerified,
            media: media,
            parsedAt: String(rawPost.parsedAt || new Date().toISOString()).slice(0, 100)
        };
    }

    prepareParsedData(rawData) {
        const rawPosts = Array.isArray(rawData?.posts) ? rawData.posts : [];
        let posts = rawPosts.map(post => this.sanitizeParsedPost(post)).filter(Boolean);

        const stats = {
            posts: [],
            count: Number(rawData?.count) || posts.length,
            stats: rawData?.stats && typeof rawData.stats === 'object' ? {
                total: Number(rawData.stats.total) || posts.length,
                duplicates: Number(rawData.stats.duplicates) || 0,
                errors: Number(rawData.stats.errors) || 0,
                scrolls: Number(rawData.stats.scrolls) || 0
            } : undefined,
            parsedAt: String(rawData?.parsedAt || new Date().toISOString())
        };

        let payload = { ...stats };
        payload.posts = posts;
        let finalData = payload;
        
        let bytes = this.estimateByteSize(finalData);
        const MAX_BYTES = 5000000; // Ограничение chrome.storage.local

        // Если размер слишком большой, постепенно отрезаем посты
        while (bytes > MAX_BYTES && posts.length > 0) {
            const removeCount = Math.max(1, Math.floor(posts.length * 0.1));
            posts = posts.slice(0, posts.length - removeCount);
            
            const newPayload = { ...stats };
            newPayload.posts = posts;
            finalData = newPayload;
            bytes = this.estimateByteSize(finalData);
        }

        // Если все еще превышаем лимит, удаляем медиа из постов
        if (bytes > MAX_BYTES) {
            posts = posts.map(p => ({ ...p, media: [] }));
            const newPayload = { ...stats };
            newPayload.posts = posts;
            finalData = newPayload;
            bytes = this.estimateByteSize(finalData);
        }

        if (bytes > MAX_BYTES) {
            throw new Error('Data too large even after trimming');
        }

        return {
            payload: finalData,
            originalCount: rawPosts.length,
            storedCount: posts.length,
            trimmed: posts.length < rawPosts.length,
            bytes: bytes
        };
    }

    async startParsing(options = {}) {
        if (this.isParsing) throw new Error('Already parsing');

        if (this.feedParser && this.feedParser.isParsing) {
            throw new Error('Feed parser is already active');
        }

        if (!this.feedParser) {
            if (typeof FeedParser !== 'undefined') {
                this.feedParser = new FeedParser();
            } else {
                throw new Error('FeedParser not found on global scope');
            }
        }

        this.isParsing = true;

        try {
            const parseResult = await this.feedParser.parse({
                maxPosts: options.maxPosts || 100,
                onMessage: (msg, data) => {
                    if (typeof this.handleMessage === 'function') {
                        this.handleMessage(msg, data);
                    }
                }
            });

            if (parseResult?.posts?.length > 0) {
                const prepared = this.prepareParsedData(parseResult);
                
                const now = new Date();
                const runId = now.toISOString().slice(0, 10).replace(/:/g, '-') + '_' + prepared.storedCount + '_' + now.getTime();
                const storageKey = 'parsed_' + runId;

                const { parsedFiles = [] } = await chrome.storage.local.get(['parsedFiles']);
                
                const currentFiles = Array.isArray(parsedFiles) ? parsedFiles : [];
                const validFiles = currentFiles.filter(file => {
                    if (!file || typeof file !== 'object' || !file.id) return false;
                    const fileDate = Date.parse(file.date || '');
                    if (!Number.isFinite(fileDate)) return true;
                    return (Date.now() - fileDate) <= 86400000 * 7; // Храним парсинги 7 дней
                });

                const existingIds = new Set(validFiles.map(f => f.id));
                const filesToDelete = currentFiles.map(f => f?.id).filter(id => id && !existingIds.has(id));

                if (filesToDelete.length > 0) {
                    await chrome.storage.local.remove(filesToDelete.map(id => 'parsed_' + id));
                }