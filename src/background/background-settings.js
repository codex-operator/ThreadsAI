import { DEFAULT_SETTINGS, PRESET_PROMPTS } from '../config.js';

export function attachSettings(TargetClass) {
  Object.assign(TargetClass.prototype, {

    async getSettings() {
      return chrome.storage.sync.get(DEFAULT_SETTINGS);
    },

    async saveSettings(newSettings) {
      await chrome.storage.sync.set(newSettings);
    },

    async getInlineAISettings() {
      const settings = await this.getSettings();
      const { commentStyle, customPrompt, openaiApiKey, gptModel } = settings;

      let instructions = null;
      if (commentStyle === 'custom') {
        instructions = customPrompt || null;
      } else {
        instructions = PRESET_PROMPTS[commentStyle]?.prompt
          || PRESET_PROMPTS.friendly.prompt;
      }

      return {
        openaiApiKey,
        gptModel:     gptModel || DEFAULT_SETTINGS.gptModel,
        instructions,
      };
    },

  });
}
