export const API_CONFIG = {
  SUPABASE_URL: '',
  ENDPOINTS: {
    AUTH: '/functions/v1/auth',
    OPENAI_PROXY: '/functions/v1/openai_proxy',
    DECREMENT: '/functions/v1/decrement',
    DECREMENT_PARSE: '/functions/v1/decrement_parse'
  }
};

export const API_URLS = {
  get AUTH() {
    return `${API_CONFIG.SUPABASE_URL}${API_CONFIG.ENDPOINTS.AUTH}`;
  },
  get OPENAI_PROXY() {
    return `${API_CONFIG.SUPABASE_URL}${API_CONFIG.ENDPOINTS.OPENAI_PROXY}`;
  },
  get DECREMENT() {
    return `${API_CONFIG.SUPABASE_URL}${API_CONFIG.ENDPOINTS.DECREMENT}`;
  },
  get DECREMENT_PARSE() {
    return `${API_CONFIG.SUPABASE_URL}${API_CONFIG.ENDPOINTS.DECREMENT_PARSE}`;
  }
};

export const STORAGE_KEYS = {
  AUTH: 'threadsai_auth',
  EXTENSION_KEY: 'threadsai_extension_key',
  LAST_TG_ID: 'threadsai_last_tg_id'
};
