// Конфигурация API — напрямую к OpenAI, без Supabase
export const API_CONFIG = {
  OPENAI_BASE_URL: 'https://api.openai.com/v1',
};

export const API_URLS = {
  get CHAT_COMPLETIONS() {
    return API_CONFIG.OPENAI_BASE_URL + '/chat/completions';
  },
};

export const STORAGE_KEYS = {
  SETTINGS: 'threadsai_settings',
};
