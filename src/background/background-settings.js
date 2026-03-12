import { DEFAULT_SETTINGS } from '../config.js';
import { API_URLS, STORAGE_KEYS } from '../shared/api-config.js';

export function attachSettings(TargetClass) {
  class SettingsExtension {
    async getSettings() {
      const settings = await chrome.storage.sync.get(DEFAULT_SETTINGS);
      return settings;
    }

    async getInlineAISettings() {
      const [syncData, localData] = await Promise.all([
        chrome.storage.sync.get(DEFAULT_SETTINGS),
        chrome.storage.local.get([STORAGE_KEYS.AUTH, STORAGE_KEYS.EXTENSION_KEY])
      ]);

      return {
        proxyUrl: API_URLS.OPENAI_PROXY,
        tgId: localData[STORAGE_KEYS.AUTH]?.tg_id ?? null,
        extensionKey: localData[STORAGE_KEYS.EXTENSION_KEY] ?? null,
        plan: localData[STORAGE_KEYS.AUTH]?.plan ?? 'free',
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
