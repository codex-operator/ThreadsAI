// Инлайн режим: добавляет кнопку "AI" рядом с полем комментария
(() => {
  const TargetClass = globalThis.ThreadsAIContentScript;
  if (!TargetClass) return;

  const BUTTON_CLASS   = 'threadsai-inline-btn';
  const INJECTED_ATTR  = 'data-threadsai-inline';

  class InlineExtension {
    enableInlineMode() {
      this.inlineMode = true;
      this.inlineObserver = new MutationObserver(() => this.injectInlineButtons());
      this.inlineObserver.observe(document.body, { childList: true, subtree: true });
      this.injectInlineButtons();
      this.log('✏️ Инлайн режим включён');
    }

    disableInlineMode() {
      this.inlineMode = false;
      this.inlineObserver?.disconnect();
      document.querySelectorAll(`.${BUTTON_CLASS}`).forEach((el) => el.remove());
      this.log('✏️ Инлайн режим выключен');
    }

    injectInlineButtons() {
      // Ищем поля комментариев, которые ещё не обработаны
      const inputs = document.querySelectorAll(
        `div[contenteditable="true"][role="textbox"]:not([${INJECTED_ATTR}]),
         textarea[placeholder*="reply"]:not([${INJECTED_ATTR}])`
      );

      for (const input of inputs) {
        input.setAttribute(INJECTED_ATTR, '1');
        this.injectButtonNear(input);
      }
    }

    injectButtonNear(input) {
      const container = input.closest('form, [class*="reply"], [class*="comment"]') || input.parentElement;
      if (!container) return;

      const btn = document.createElement('button');
      btn.className   = BUTTON_CLASS;
      btn.textContent = '✨ AI';
      btn.title       = 'Сгенерировать комментарий через ThreadsAI';

      Object.assign(btn.style, {
        position:     'absolute',
        right:        '8px',
        bottom:       '8px',
        padding:      '4px 10px',
        borderRadius: '8px',
        background:   'rgba(60, 168, 255, 0.15)',
        border:       '1px solid rgba(60, 168, 255, 0.3)',
        color:        '#3ca8ff',
        fontSize:     '12px',
        fontWeight:   '600',
        cursor:       'pointer',
        zIndex:       '9999',
        lineHeight:   '1.4',
      });

      btn.addEventListener('click', async (e) => {
        e.preventDefault();
        e.stopPropagation();
        btn.textContent = '⏳';
        btn.disabled    = true;

        try {
          // Берём текст поста из ближайшего article
          const article   = input.closest('article') || document.querySelector('article');
          const postText  = article?.querySelector('span[dir="auto"]')?.innerText?.trim() || 'Пост без текста';
          const settings  = await chrome.storage.sync.get(null);
          const response  = await chrome.runtime.sendMessage({
            type: 'generate_comment', postText, settings,
          });

          if (response?.success && response.comment) {
            input.focus();
            document.execCommand('insertText', false, response.comment);
          } else {
            throw new Error(response?.error || 'Пустой ответ');
          }
        } catch (err) {
          console.error('[ThreadsAI] Инлайн ошибка:', err.message);
          alert(`ThreadsAI: ${err.message}`);
        } finally {
          btn.textContent = '✨ AI';
          btn.disabled    = false;
        }
      });

      // Делаем контейнер относительно позиционированным
      if (getComputedStyle(container).position === 'static') {
        container.style.position = 'relative';
      }
      container.appendChild(btn);
    }
  }

  Object.assign(
    TargetClass.prototype,
    Object.getOwnPropertyDescriptors(InlineExtension.prototype)
  );
  delete TargetClass.prototype.constructor;
})();
