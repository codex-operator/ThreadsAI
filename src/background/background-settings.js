import { DEFAULT_SETTINGS } from '../config.js';
import { API_URLS } from '../shared/api-config.js';

export function attachSettings(TargetClass) {
  class SettingsExtension {
    async getSettings() {
      const settings = await chrome.storage.sync.get(DEFAULT_SETTINGS);
      return settings;
    }

    async getInlineAISettings() {
      const syncData = await chrome.storage.sync.get(DEFAULT_SETTINGS);

      return {
        proxyUrl: API_URLS.OPENAI_PROXY,
        plan: 'local',
        gptModel: syncData.gptModel ?? DEFAULT_SETTINGS.gptModel,
        instructions: null
      };
    }

    async saveSettings(newSettings) {
      await chrome.storage.sync.set(newSettings);
    }
  }

  Object.assign(TargetClass.prototype, Object.getOwnPropertyDescriptors(SettingsExtension.prototype));
  delete TargetClass.prototype.constructor;
}
