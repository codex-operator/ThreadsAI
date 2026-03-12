// Точка входа: инициализирует главный класс и подключает расширения
(() => {
  if (globalThis.ThreadsAI_LOADED) return; // защита от двойной загрузки
  globalThis.ThreadsAI_LOADED = true;

  // Глобальный конфиг
  globalThis.ThreadsAI_CONFIG = {
    LIMITS: {
      COMMENTED_POSTS_MAX_AGE:      7 * 24 * 60 * 60 * 1000, // 7 дней
      MAX_COMMENTED_POSTS_STORAGE:  1000,
    },
  };

  // Ждём инициализации всех модулей
  if (globalThis.ThreadsAIContentScript) {
    globalThis.ThreadsAI_INSTANCE = new globalThis.ThreadsAIContentScript();
    console.log('[ThreadsAI] Content script инициализирован');
  }
})();
