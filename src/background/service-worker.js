import { DEFAULT_SETTINGS, PRESET_PROMPTS } from '../config.js';

class ThreadsAIServiceWorker {
  constructor() {
    this.isActive    = false;
    this.activeTabId = null;
    this.init();
  }

  init() {
    this.setupEventListeners();
    console.log('[ThreadsAI] Service Worker запущен');
  }

  setupEventListeners() {
    chrome.runtime.onInstalled.addListener((details) => {
      console.log('[ThreadsAI] Установлено:', details.reason);
    });

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      this.handleMessage(message, sender, sendResponse);
      return true;
    });

    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
      if (changeInfo.status === 'complete' && tab.url?.includes('threads.com')) {
        console.log('[ThreadsAI] Threads открыт, вкладка:', tabId);
      }
    });
  }

  async handleMessage(message, sender, sendResponse) {
    switch (message.type) {
      case 'get_settings': {
        const settings = await this.getSettings();
        sendResponse({ success: true, settings });
        break;
      }
      case 'save_settings': {
        await this.saveSettings(message.settings);
        sendResponse({ success: true });
        break;
      }
      case 'generate_comment': {
        try {
          const comment = await this.generateComment(message.postText, message.settings);
          sendResponse({ success: true, comment });
        } catch (err) {
          sendResponse({ success: false, error: err.message });
        }
        break;
      }
      case 'activate_app': {
        this.isActive    = true;
        this.activeTabId = sender.tab?.id || null;
        if (this.activeTabId) {
          chrome.tabs.update(this.activeTabId, { autoDiscardable: false }).catch(() => {});
        }
        sendResponse({ success: true });
        break;
      }
      case 'deactivate_app': {
        this.isActive = false;
        const tabId   = sender.tab?.id || this.activeTabId;
        if (tabId) {
          chrome.tabs.update(tabId, { autoDiscardable: true }).catch(() => {});
        }
        this.activeTabId = null;
        sendResponse({ success: true });
        break;
      }
      default:
        sendResponse({ success: false, error: 'Неизвестный тип сообщения' });
    }
  }

  async getSettings() {
    return chrome.storage.sync.get(DEFAULT_SETTINGS);
  }

  async saveSettings(newSettings) {
    await chrome.storage.sync.set(newSettings);
  }

  // ── Роутер ────────────────────────────────────────────────

  async generateComment(postText, settings) {
    const provider = settings.aiProvider || 'openai';
    return provider === 'gemini'
      ? this.generateWithGemini(postText, settings)
      : this.generateWithOpenAI(postText, settings);
  }

  // ── OpenAI ────────────────────────────────────────────────

  async generateWithOpenAI(postText, settings) {
    const { openaiApiKey, gptModel, commentStyle } = settings;
    if (!openaiApiKey) throw new Error('API-ключ OpenAI не указан. Откройте настройки.');

    const systemPrompt = PRESET_PROMPTS[commentStyle]?.prompt || PRESET_PROMPTS.friendly.prompt;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${openaiApiKey}`,
      },
      body: JSON.stringify({
        model:      gptModel || 'gpt-4o-mini',
        max_tokens: 150,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user',   content: `Пост: ${postText}` },
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err?.error?.message || `OpenAI HTTP ${response.status}`);
    }

    const data    = await response.json();
    const comment = data.choices?.[0]?.message?.content?.trim();
    if (!comment) throw new Error('OpenAI вернул пустой ответ');
    return comment;
  }

  // ── Gemini ────────────────────────────────────────────────

  async generateWithGemini(postText, settings) {
    const { geminiApiKey, geminiModel, commentStyle } = settings;
    if (!geminiApiKey) throw new Error('API-ключ Gemini не указан. Откройте настройки.');

    const systemPrompt = PRESET_PROMPTS[commentStyle]?.prompt || PRESET_PROMPTS.friendly.prompt;
    const model        = geminiModel || 'gemini-2.0-flash';
    const url          = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${geminiApiKey}`;

    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: `${systemPrompt}\n\nПост: ${postText}` }],
        }],
        generationConfig: { maxOutputTokens: 150 },
      }),
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err?.error?.message || `Gemini HTTP ${response.status}`);
    }

    const data    = await response.json();
    const comment = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
    if (!comment) throw new Error('Gemini вернул пустой ответ');
    return comment;
  }
}

new ThreadsAIServiceWorker();