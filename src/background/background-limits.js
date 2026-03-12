import { API_CONFIG, API_URLS, STORAGE_KEYS } from '../shared/api-config.js';

const LIMITS_DEBUG = false;

const limitsDebug = (...args) => {
  if (LIMITS_DEBUG) {
    console.log(...args);
  }
};

/**
 * Подключает логику лимитов к сервис-воркеру.
 *
 * В текущей версии лимит на бесплатные парсинги отключен:
 * `decrementFreeParsing` всегда возвращает успешный ответ.
 */
export function attachLimits(ServiceWorkerClass) {
  if (!ServiceWorkerClass?.prototype) {
    return;
  }

  ServiceWorkerClass.prototype.decrementFreeParsing = async function decrementFreeParsing() {
    limitsDebug('decrementFreeParsing: limit disabled', {
      authStorageKey: STORAGE_KEYS.AUTH,
      extensionKeyStorage: STORAGE_KEYS.EXTENSION_KEY,
      decrementUrl: API_URLS.DECREMENT_PARSE,
      supabaseUrl: API_CONFIG.SUPABASE_URL,
    });

    return {
      success: true,
      parsing_left: -1,
      reason: 'limit_disabled',
    };
  };
}
