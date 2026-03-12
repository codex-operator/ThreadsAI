import { DEFAULT_SETTINGS, PRESET_PROMPTS } from "../config.js";
import { API_CONFIG, API_URLS, STORAGE_KEYS } from "../shared/api-config.js";

export function attachSettings(TargetClass) {
  class SettingsExtension {
    async getSettings() {
      try {
        const settings = await chrome.storage.sync.get(DEFAULT_SETTINGS);
        return settings;
      } catch (error) {
        console.error("Error getting settings", error);
        throw error;
      }
    }

    async getInlineAISettings() {
      const [syncData, localData] = await Promise.all([
        chrome.storage.sync.get({
          ...DEFAULT_SETTINGS,
          commentStyle: "friendly",
          customPrompt: "",
          selectedPromptId: "default",
          customPrompts: [],
        }),
        chrome.storage.local.get([
          STORAGE_KEYS.AUTH,
          STORAGE_KEYS.EXTENSION_KEY,
          "customPrompts",
        ]),
      ]);

      const extensionKey = localData[STORAGE_KEYS.EXTENSION_KEY] || null;
      const localCustomPrompts = Array.isArray(localData.customPrompts)
        ? localData.customPrompts
        : [];
      const syncCustomPrompts = Array.isArray(syncData.customPrompts)
        ? syncData.customPrompts
        : [];

      const customPrompts = localCustomPrompts.length
        ? localCustomPrompts
        : syncCustomPrompts;
      const tgId = 1;
      const plan = "pro_user";
      let instructions = null;

      if (syncData.commentStyle === "custom") {
        const selectedPromptId = syncData.selectedPromptId;
        const selectedPrompt = customPrompts.find(
          (p) => p && p.id === selectedPromptId,
        );
        instructions = selectedPrompt?.text || syncData.customPrompt || null;
      } else {
        instructions =
          PRESET_PROMPTS?.[syncData.commentStyle]?.prompt ||
          PRESET_PROMPTS?.[syncData.defaultStyle]?.prompt ||
          syncData.customPrompt ||
          null;
      }

      // Синхронизация кастомных промптов из sync в local, если они там отсутствуют
      if (!localCustomPrompts.length && syncCustomPrompts.length) {
        chrome.storage.local
          .set({ customPrompts: syncCustomPrompts })
          .catch(() => {});
      }

      return {
        proxyUrl: API_URLS.OPENAI_PROXY,
        supabaseKey: API_CONFIG.SUPABASE_KEY,
        tgId: tgId,
        extensionKey: extensionKey,
        plan: plan,
        gptModel: syncData.gptModel || DEFAULT_SETTINGS.gptModel,
        instructions: instructions,
      };
    }

    async saveSettings(newSettings) {
      try {
        await chrome.storage.sync.set(newSettings);
      } catch (error) {
        console.error("Ошибка сохранения настроек:", error);
        throw error;
      }
    }
  }

  Object.assign(
    TargetClass.prototype,
    Object.getOwnPropertyDescriptors(SettingsExtension.prototype),
  );
  delete TargetClass.prototype.constructor;
}
