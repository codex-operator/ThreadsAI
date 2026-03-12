// Парсер постов: извлекает данные из DOM Threads
(() => {
  const TargetClass = globalThis.ThreadsAIContentScript;
  if (!TargetClass) return;

  class ParserExtension {
    /**
     * Собрать все посты на текущей странице
     * @returns {Array<{id, text, author, element}>}
     */
    parsePosts() {
      const results = [];
      const articles = document.querySelectorAll(
        'article, [data-pressable-container="true"], div[class*="x1qjc9v5"]'
      );

      for (const el of articles) {
        const data = this.parsePost(el);
        if (data) results.push(data);
      }

      return results;
    }

    /**
     * Разобрать один элемент поста
     */
    parsePost(el) {
      const textEl   = el.querySelector('span[dir="auto"], div[dir="auto"]');
      const authorEl = el.querySelector('a[href*="/t/"], [class*="username"], span[class*="author"]');
      const linkEl   = el.querySelector('a[href*="/t/"]');

      const text   = textEl?.innerText?.trim()   || '';
      const author = authorEl?.innerText?.trim() || '';
      const url    = linkEl?.href               || '';

      // Генерируем ID поста из URL или из текста
      const id = url
        ? url.replace(/^https?:\/\/[^/]+/, '').replace(/\//g, '_')
        : btoa(text.slice(0, 50)).replace(/[^a-z0-9]/gi, '').slice(0, 20);

      if (!text && !author) return null;

      return { id, text, author, url, element: el };
    }

    /**
     * Извлечь текст из конкретного элемента поста
     */
    extractPostText(postEl) {
      const selectors = [
        '[data-ad-rendering-role="story_message"]',
        'span[dir="auto"]',
        'div[dir="auto"]',
        'p',
      ];
      for (const sel of selectors) {
        const el = postEl.querySelector(sel);
        if (el?.innerText?.trim()) return el.innerText.trim();
      }
      return '';
    }

    /**
     * Найти первый непрокомментированный пост
     */
    async findNextPost() {
      const posts = this.parsePosts();
      for (const post of posts) {
        if (post.element.dataset.threadsaiProcessed) continue;
        if (this.settings?.skipReplied && await this.isPostCommented(post.id)) continue;
        return post.element;
      }
      return null;
    }
  }

  Object.assign(
    TargetClass.prototype,
    Object.getOwnPropertyDescriptors(ParserExtension.prototype)
  );
  delete TargetClass.prototype.constructor;
})();
