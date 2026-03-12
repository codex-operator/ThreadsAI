import { API_CONFIG, API_URLS, STORAGE_KEYS } from '../shared/api-config.js';

const DECREMENT_PARSE_CONFIG = {
    URL: API_URLS['OPENAI_PROXY'] || API_URLS['PARSE_DECREMENT'], // Зависит от вашего конфига
    SUPABASE_KEY: API_CONFIG['SUPABASE_KEY'],
    AUTH_STORAGE_KEY: STORAGE_KEYS['AUTH'],
    EXTENSION_KEY_STORAGE: STORAGE_KEYS['EXTENSION_KEY']
};
const EXTENSION_KEY_PATTERN = /^ext:[a-z0-9-]{16,}$/i;
const DEBUG_LIMITS = false;

const limitsDebug = (...args) => {
    if (DEBUG_LIMITS) console.log(...args);
};

export function attachLimits(TargetClass) {
    class LimitsExtension {
        async decrementFreeParsing(options = {}) {
            try {
                const storageData = await chrome.storage.local.get([
                    DECREMENT_PARSE_CONFIG.AUTH_STORAGE_KEY,
                    DECREMENT_PARSE_CONFIG.EXTENSION_KEY_STORAGE
                ]);
                
                const authData = storageData[DECREMENT_PARSE_CONFIG.AUTH_STORAGE_KEY];
                const storedExtKey = storageData[DECREMENT_PARSE_CONFIG.EXTENSION_KEY_STORAGE];

                const tg_id = (typeof options?.tg_id === 'number' && Number.isFinite(options.tg_id))
                    ? options.tg_id
                    : authData?.tg_id;
                    
                const extension_key = options?.extension_key ?? storedExtKey;

                if (!tg_id) {
                    limitsDebug('Parse decrement: no tg_id');
                    return { success: false, error: 'network_error' }; 
                }

                if (!extension_key || !EXTENSION_KEY_PATTERN.test(String(extension_key))) {
                    return { success: false, error: 'invalid_extension_key' };
                }

                if (authData && authData.plan === 'pro_user') {
                    limitsDebug('Parse decrement: PRO user, skipping');
                    return { skipped: true, reason: 'pro_user' };
                }

                const response = await fetch(DECREMENT_PARSE_CONFIG.URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'apikey': DECREMENT_PARSE_CONFIG.SUPABASE_KEY,
                        'Authorization': 'Bearer ' + DECREMENT_PARSE_CONFIG.SUPABASE_KEY
                    },
                    body: JSON.stringify({ tg_id, extension_key })
                });

                const responseText = await response.text();
                let responseData = null;

                try {
                    responseData = responseText ? JSON.parse(responseText) : null;
                } catch (e) {
                    return { 
                        success: false, 
                        error: `bad_json_http_${response.status}:${(responseText || '').slice(0, 100)}` 
                    };
                }

                if (!responseData || typeof responseData !== 'object') {
                    return { 
                        success: false, 
                        error: responseText ? `invalid_body_http_${response.status}` : `empty_body_http_${response.status}` 
                    };
                }

                if (response.ok && responseData?.success) {
                    const parsingLeft = Number(responseData.parsing_left);
                    const finalParsingLeft = Number.isFinite(parsingLeft) ? parsingLeft : 0;

                    if (authData) {
                        authData.parsing_left = finalParsingLeft;
                        await chrome.storage.local.set({ [DECREMENT_PARSE_CONFIG.AUTH_STORAGE_KEY]: authData });
                    }
                    return { success: true, parsing_left: finalParsingLeft };
                }

                const errorMsg = String(responseData?.error || responseData?.message || responseData?.detail || '').toLowerCase();
                
                if (errorMsg === 'limit_reached') {
                    limitsDebug('Limit reached');
                    return { success: false, error: 'limit_reached', parsing_left: 0 };
                }

                if (!response.ok) {
                    return { success: false, error: errorMsg || `http_error_${response.status}` };
                }

                return { success: false, error: errorMsg || 'unknown_error' };

            } catch (error) {
                console.error('Decrement error', error);
                return { success: false, error: 'network_error' };
            }
        }
    }

    // Примешиваем методы к целевому классу (Service Worker)
    Object.assign(TargetClass.prototype, Object.getOwnPropertyDescriptors(LimitsExtension.prototype));
    delete TargetClass.prototype.constructor;
}