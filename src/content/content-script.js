// Главный класс content-script
class ThreadsAIContentScript {
  constructor() {
    this.isRunning    = false;
    this.settings     = {};
    this.commentCount = 0;
    this.setupMessageListener();
    console.log('[ThreadsAI] Content script готов');
  }

  // ── Слушатель сообщений от popup ──────────────────────────

  setupMessageListener() {
    chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
      switch (msg.type) {
        case 'start':
          this.settings = msg.settings || {};
          this.start();
          sendResponse({ success: true });
          break;

        case 'stop':
          this.stop();
          sendResponse({ success: true });
          break;

        case 'enable_inline':
          this.enableInlineMode();
          sendResponse({ success: true });
          break;

        case 'disable_inline':
          this.disableInlineMode();
          sendResponse({ success: true });
          break;

        case 'get_settings':
          sendResponse({ success: true, loaded: true });
          break;

        default:
          sendResponse({ success: false });
      }
      return true;
    });
  }

  // ── Логирование ───────────────────────────────────────────

  log(text) {
    chrome.runtime.sendMessage({ type: 'log', text }).catch(() => {});
  }

  debug(...args) {
    console.log('[ThreadsAI]', ...args);
  }

  // ── Запуск/остановка ──────────────────────────────────────

  start() {
    if (this.isRunning) return;
    this.isRunning    = true;
    this.commentCount = 0;
    this.log('▶️ Запуск автокомментирования...');
    this.runLoop();
  }

  stop() {
    this.isRunning = false;
    this.log('⏹ Остановлено пользователем');
  }

  // ── Основной цикл ─────────────────────────────────────────

  async runLoop() {
    const maxComments = this.settings.maxComments || 10;

    while (this.isRunning && this.commentCount < maxComments) {
      try {
        const post = await this.findNextPost();
        if (!post) {
          this.log('🔍 Посты не найдены, прокручиваю...');
          await this.scrollDown();
          await this.wait(2000);
          continue;
        }

        const postText = this.extractPostText(post);
        if (!postText) {
          this.markAsProcessed(post);
          continue;
        }

        this.log(`💬 Генерирую комментарий к посту...`);
        const comment = await this.generateComment(postText);

        if (comment && this.isRunning) {
          await this.postComment(post, comment);
          this.commentCount++;
          chrome.runtime.sendMessage({ type: 'comment_done' }).catch(() => {});
          this.markAsProcessed(post);
          this.log(`✅ Комментарий ${this.commentCount}/${maxComments} оставлен`);

          const delay = this.randomDelay();
          this.log(`⏳ Жду ${Math.round(delay / 1000)} сек...`);
          await this.wait(delay);
        }
      } catch (err) {
        this.log(`❌ Ошибка: ${err.message}`);
        this.debug('Ошибка в runLoop:', err);
        await this.wait(3000);
      }
    }

    if (this.commentCount >= maxComments) {
      this.log(`🎉 Выполнено! Оставлено ${this.commentCount} комментариев`);
    }

    this.isRunning = false;
    chrome.runtime.sendMessage({ type: 'finished' }).catch(() => {});
  }

  // ── Поиск следующего поста ────────────────────────────────

  async findNextPost() {
    const posts = document.querySelectorAll('article, [data-pressable-container], div[class*="x1qjc9v5"]');
    for (const post of posts) {
      if (post.dataset.threadsaiProcessed) continue;
      if (this.settings.skipReplied && this.alreadyCommented(post)) continue;
      return post;
    }
    return null;
  }

  extractPostText(post) {
    const textEl = post.querySelector(
      'span[dir="auto"], div[dir="auto"], [data-ad-rendering-role="story_message"]'
    );
    return textEl?.innerText?.trim() || '';
  }

  markAsProcessed(post) {
    post.dataset.threadsaiProcessed = '1';
    chrome.runtime.sendMessage({ type: 'post_processed' }).catch(() => {});
  }

  alreadyCommented(post) {
    // Проверяем наличие собственного комментария (упрощённая логика)
    return false;
  }

  // ── Генерация комментария через background ────────────────

  async generateComment(postText) {
    const response = await chrome.runtime.sendMessage({
      type:     'generate_comment',
      postText,
      settings: this.settings,
    });
    if (!response?.success) throw new Error(response?.error || 'Ошибка генерации');
    return response.comment;
  }

  // ── Публикация комментария ────────────────────────────────

  async postComment(post, commentText) {
    // Найти поле ввода комментария
    const replyBtn = post.querySelector('svg[aria-label*="Reply"], svg[aria-label*="reply"]')?.closest('div[role="button"]');
    if (replyBtn) {
      replyBtn.click();
      await this.wait(800);
    }

    const input = document.querySelector(
      'div[contenteditable="true"][role="textbox"], textarea[placeholder*="reply"], textarea[placeholder*="комментар"]'
    );

    if (!input) throw new Error('Поле ввода комментария не найдено');

    input.focus();
    document.execCommand('insertText', false, commentText);
    await this.wait(500);

    // Нажать кнопку отправки
    const submitBtn = document.querySelector(
      'div[role="button"][tabindex="0"]:last-child, button[type="submit"]'
    );
    if (submitBtn) {
      submitBtn.click();
      await this.wait(1000);
    }
  }

  // ── Утилиты ───────────────────────────────────────────────

  wait(ms) {
    return new Promise((r) => setTimeout(r, ms));
  }

  randomDelay() {
    const min = (this.settings.delayMin || 30) * 1000;
    const max = (this.settings.delayMax || 60) * 1000;
    return Math.random() * (max - min) + min;
  }

  scrollDown() {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
    return this.wait(1500);
  }

  // ── Инлайн режим ─────────────────────────────────────────

  enableInlineMode() {
    this.inlineMode = true;
    this.log('✏️ Инлайн режим включён');
    // Логика инлайн-кнопок добавляется через content-inline.js
    chrome.runtime.sendMessage({ type: 'save_settings', settings: { inlineModeEnabled: true } }).catch(() => {});
  }

  disableInlineMode() {
    this.inlineMode = false;
    this.log('✏️ Инлайн режим выключен');
    chrome.runtime.sendMessage({ type: 'save_settings', settings: { inlineModeEnabled: false } }).catch(() => {});
  }
}

globalThis.ThreadsAIContentScript = ThreadsAIContentScript;
