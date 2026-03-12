import { DEFAULT_SETTINGS } from '../config.js';
import { attachSettings } from './background-settings.js';
import { attachLimits } from './background-limits.js';

class ThreadsAIServiceWorker {
  constructor() {
    this.isActive = false;
    this.activeTabId = null;
    this.init();
  }

  init() {
    this.setupEventListeners();
  }

  setupEventListeners() {
    chrome.runtime.onInstalled.addListener(async () => {
      await chrome.storage.sync.set(DEFAULT_SETTINGS);
    });

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      this.handleMessage(message, sender, sendResponse);
      return true;
    });
  }

  async handleMessage(message, sender, sendResponse) {
    try {
      switch (message?.type) {
        case 'get_settings': {
          const settings = await this.getSettings();
          sendResponse({ success: true, settings });
          return;
        }
        case 'save_settings': {
          await this.saveSettings(message.settings || {});
          sendResponse({ success: true });
          return;
        }
        case 'get_inline_ai_settings': {
          const settings = await this.getInlineAISettings();
          sendResponse({ success: true, settings });
          return;
        }
        case 'activate_app': {
          this.isActive = true;
          this.activeTabId = sender?.tab?.id ?? null;
          sendResponse({ success: true });
          return;
        }
        case 'deactivate_app': {
          this.isActive = false;
          this.activeTabId = null;
          sendResponse({ success: true });
          return;
        }
        case 'decrement_free_parsing': {
          const result = await this.decrementFreeParsing();
          sendResponse(result);
          return;
        }
        case 'ping':
          sendResponse({ success: true });
          return;
        default:
          sendResponse({ success: false, error: 'unknown_message_type' });
      }
    } catch (error) {
      sendResponse({ success: false, error: error.message || 'unknown_error' });
    }
  }
}

attachSettings(ThreadsAIServiceWorker);
attachLimits(ThreadsAIServiceWorker);
new ThreadsAIServiceWorker();
