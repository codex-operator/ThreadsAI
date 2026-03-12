// Расширение: история прокомментированных постов
(() => {
  const CONFIG      = globalThis.ThreadsAI_CONFIG;
  const TargetClass = globalThis.ThreadsAIContentScript;
  if (!TargetClass) return;

  class CommentHistoryExtension {
    async getCommentedPosts() {
      if (this.commentedPosts !== undefined) return this.commentedPosts;

      try {
        const data = await chrome.storage.local.get(['commentedPosts']);
        if (data.commentedPosts) {
          if (Array.isArray(data.commentedPosts)) {
            // Миграция: массив → Map
            const now = Date.now();
            this.commentedPosts = new Map(
              data.commentedPosts.map((id) => [id, now])
            );
          } else {
            this.commentedPosts = new Map(Object.entries(data.commentedPosts));
          }
          this.debug(`История: загружено ${this.commentedPosts.size} постов`);
        } else {
          this.commentedPosts = new Map();
        }
      } catch (err) {
        this.debug('Ошибка загрузки истории:', err);
        this.commentedPosts = new Map();
      }

      return this.commentedPosts;
    }

    async saveCommentedPost(postId) {
      const posts = await this.getCommentedPosts();
      posts.set(postId, Date.now());
      await this.flushCommentedPosts();
    }

    async flushCommentedPosts() {
      if (!this.commentedPosts) return;
      const obj = Object.fromEntries(this.commentedPosts);
      await chrome.storage.local.set({ commentedPosts: obj }).catch(() => {});
    }

    async cleanupOldCommentedPosts() {
      if (!this.commentedPosts) return;

      const now         = Date.now();
      const maxAge      = CONFIG?.LIMITS?.COMMENTED_POSTS_MAX_AGE || (7 * 24 * 60 * 60 * 1000);
      const maxStorage  = CONFIG?.LIMITS?.MAX_COMMENTED_POSTS_STORAGE || 1000;
      let   deleted     = 0;

      for (const [postId, timestamp] of this.commentedPosts) {
        if (now - timestamp > maxAge) {
          this.commentedPosts.delete(postId);
          deleted++;
        }
      }

      // Если всё равно слишком много — удаляем самые старые
      if (this.commentedPosts.size > maxStorage) {
        const sorted = [...this.commentedPosts.entries()].sort((a, b) => a[1] - b[1]);
        const toDelete = sorted.slice(0, this.commentedPosts.size - maxStorage);
        for (const [id] of toDelete) this.commentedPosts.delete(id);
        deleted += toDelete.length;
      }

      if (deleted > 0) {
        this.debug(`История: удалено ${deleted} устаревших записей`);
        await this.flushCommentedPosts();
      }
    }

    async isPostCommented(postId) {
      const posts = await this.getCommentedPosts();
      return posts.has(postId);
    }
  }

  Object.assign(
    TargetClass.prototype,
    Object.getOwnPropertyDescriptors(CommentHistoryExtension.prototype)
  );
  delete TargetClass.prototype.constructor;
})();
