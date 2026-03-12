(() => {
    const CONFIG = globalThis.ThreadsAI_CONFIG;
    const TargetClass = globalThis.ThreadsAIContentScript;

    if (!TargetClass) return;

    class CommentHistoryExtension {
        async getCommentedPosts() {
            if (this.commentedPosts === undefined) {
                try {
                    const storageData = await chrome.storage.local.get(['commentedPosts']);
                    
                    if (storageData.commentedPosts) {
                        // Поддержка миграции: если раньше был массив, превращаем его в Map с текущим временем
                        if (Array.isArray(storageData.commentedPosts)) {
                            const now = Date.now();
                            this.commentedPosts = new Map(
                                storageData.commentedPosts.map(postId => [postId, now])
                            );
                        } else {
                            // Если это уже объект словаря, просто преобразуем в Map
                            this.commentedPosts = new Map(Object.entries(storageData.commentedPosts));
                        }
                        this.debug(`Загружено ${this.commentedPosts.size} прокомментированных постов`);
                    } else {
                        this.commentedPosts = new Map();
                    }
                } catch (error) {
                    this.debug('Ошибка загрузки истории комментариев:', error);
                    this.commentedPosts = new Map();
                }
            }
            return this.commentedPosts;
        }

        async cleanupOldCommentedPosts() {
            if (!this.commentedPosts) return;

            try {
                const now = Date.now();
                // Берем лимиты из глобального конфига (максимальный возраст и максимальное количество)
                const maxAgeMs = CONFIG?.LIMITS?.COMMENTED_POSTS_MAX_AGE || (7 * 24 * 60 * 60 * 1000); // По умолчанию 7 дней
                const maxStorageLimit = CONFIG?.LIMITS?.MAX_COMMENTED_POSTS_STORAGE || 1000;

                let deletedCount = 0;

                // 1. Очистка устаревших записей по времени
                for (const [postId, timestamp] of this.commentedPosts) {
                    if (now - timestamp > maxAgeMs) {
                        this.commentedPosts.delete(postId);
                        deletedCount++;
                    }
                }

                // 2. Очистка старых записей, если превышен лимит на количество
                if (this.commentedPosts.size > maxStorageLimit) {
                    // Сортируем от самых старых к самым новым
                    const sortedEntries = [...this.commentedPosts.entries()].sort((a, b) => a[1] - b[1]);
                    // Оставляем только допустимое количество самых свежих записей
                    const entriesToKeep = sortedEntries.slice(sortedEntries.length - maxStorageLimit);
                    
                    this.commentedPosts = new Map(entriesToKeep);
                    deletedCount += (sortedEntries.length - entriesToKeep.length);
                }

                // Если что-то удалили, синхронизируем с хранилищем Chrome
                if (deletedCount > 0) {
                    this.debug(`Очищено ${deletedCount} старых постов из истории.`);
                    await chrome.storage.local.set({
                        commentedPosts: Object.fromEntries(this.commentedPosts)
                    });
                }
            } catch (error) {
                this.debug('Ошибка при очистке старых комментариев', error);
            }
        }
    }

    // Примешиваем методы к прототипу основного класса (mixin)
    const descriptors = Object.getOwnPropertyDescriptors(CommentHistoryExtension.prototype);
    delete descriptors.constructor; // Убираем конструктор, чтобы не перезаписать родительский
    Object.defineProperties(TargetClass.prototype, descriptors);
})();