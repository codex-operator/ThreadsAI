// Парсер ленты: следит за динамической подгрузкой постов через MutationObserver
(() => {
  if (globalThis.ThreadsAI_FeedParser) return;
  globalThis.ThreadsAI_FeedParser = true;

  let observer = null;

  /**
   * Запустить наблюдение за лентой
   * @param {Function} onNewPosts — коллбэк при появлении новых постов
   */
  function startFeedObserver(onNewPosts) {
    if (observer) return;

    observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType !== Node.ELEMENT_NODE) continue;

          // Проверяем, является ли новый узел постом или содержит посты
          const isPost    = node.matches?.('article, [data-pressable-container]');
          const hasPosts  = node.querySelectorAll?.('article, [data-pressable-container]').length > 0;

          if (isPost || hasPosts) {
            onNewPosts?.();
            break;
          }
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    console.log('[ThreadsAI] Feed observer запущен');
  }

  function stopFeedObserver() {
    observer?.disconnect();
    observer = null;
  }

  // Экспортируем в глобальный контекст
  globalThis.ThreadsAI_FeedObserver = { start: startFeedObserver, stop: stopFeedObserver };
})();
