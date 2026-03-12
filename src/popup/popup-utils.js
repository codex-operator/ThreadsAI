// Утилиты для popup

/** Сокращение для document.querySelector */
export const $ = (selector) => document.querySelector(selector);

/** Отправить сообщение в указанную вкладку Chrome */
export const sendMsg = (tabId, payload) =>
  new Promise((resolve, reject) => {
    chrome.tabs.sendMessage(tabId, payload, (response) => {
      if (chrome.runtime.lastError) {
        reject(new Error(chrome.runtime.lastError.message));
      } else {
        resolve(response);
      }
    });
  });

/** Список content-script файлов (для динамической инъекции) */
export const CONTENT_SCRIPT_FILES = [
  'src/content/feed-parser.js',
  'src/content/content-script.js',
  'src/content/content-settings.js',
  'src/content/content-inline.js',
  'src/content/content-parser.js',
  'src/content/content-bootstrap.js',
];

/** Найти активную вкладку threads.com */
export async function getActiveThreadsTab() {
  const tabs = await chrome.tabs.query({ url: 'https://*.threads.com/*' });
  return tabs[0] || null;
}

/** Убедиться, что content-script загружен во вкладку */
export async function ensureThreadsContentScript(tabId) {
  try {
    await sendMsg(tabId, { type: 'get_settings' });
    return true;
  } catch {
    // Скрипт не отвечает — инжектируем
    await chrome.scripting.executeScript({
      target: { tabId },
      files:  CONTENT_SCRIPT_FILES,
    });
    await new Promise((r) => setTimeout(r, 500));
    await sendMsg(tabId, { type: 'get_settings' });
    return true;
  }
}

/** Форматировать текущее время HH:MM:SS */
export const formatTime = () =>
  new Date().toLocaleTimeString('ru', {
    hour:   '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
