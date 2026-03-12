import { DEFAULT_SETTINGS } from '../config.js';
import { attachSettings } from './background-settings.js';
import { attachLimits } from './background-limits.js';

const DEBUG_SW = false;

const swDebug = (...args) => {
    if (DEBUG_SW) console.log(...args);
};

class ThreadsAIServiceWorker {
    constructor() {
        this.isActive = false;
        this.activeTabId = null;
        this.init();
    }

    async setTabAutoDiscardable(tabId, isDiscardable) {
        if (!tabId) return;
        try {
            await chrome.tabs.update(tabId, { autoDiscardable: isDiscardable });
        } catch (error) {
            // Игнорируем ошибки при обновлении таба
        }
    }

    init() {
        this.setupEventListeners();
        swDebug('ThreadsAI Service Worker инициализирован');
    }

    setupEventListeners() {
        chrome.runtime.onInstalled.addListener((details) => {
            swDebug('ThreadsAI расширение установлено:', details.reason);
            if (details.reason === 'install') {
                this.onFirstInstall();
            } else if (details.reason === 'update') {
                this.onUpdate(details.previousVersion);
            }
        });

        chrome.runtime.onStartup.addListener(() => {
            swDebug('Браузер запущен, ThreadsAI готов к работе');
        });

        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
            this.handleMessage(message, sender, sendResponse);
            return true; // Держим канал открытым для асинхронного ответа
        });

        chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
            if (changeInfo.status === 'complete' && tab.url && tab.url.includes('threads.com')) {
                this.onThreadsPageLoaded(tabId, tab);
            }
        });

        chrome.tabs.onActivated.addListener((activeInfo) => {
            chrome.tabs.get(activeInfo.tabId, (tab) => {
                if (chrome.runtime.lastError) return;
                if (tab?.url?.includes('threads.com')) {
                    this.activeTabId = activeInfo.tabId;
                }
            });
        });
    }

    async onFirstInstall() {
        try {
            await chrome.storage.sync.set({ ...DEFAULT_SETTINGS, firstRun: true });
            await chrome.storage.local.set({
                sessionStats: { comments: 0, processed: 0, errors: 0 },
                totalStats: { comments: 0, processed: 0, errors: 0 },
                lastRun: null
            });
            swDebug('Первичная настройка завершена');
        } catch (error) {
            console.error('Ошибка при первой установке:', error);
        }
    }

    async onUpdate(previousVersion) {
        swDebug(`Обновление с версии ${previousVersion} на ${chrome.runtime.getManifest().version}`);
        try {
            const settings = await chrome.storage.sync.get();
            let isUpdated = false;
            
            if (!settings.commentStyle) {
                settings.commentStyle = 'friendly';
                isUpdated = true;
            }
            
            if (isUpdated) {
                await chrome.storage.sync.set(settings);
                swDebug('Настройки обновлены');
            }
        } catch (error) {
            console.error('Ошибка при обновлении:', error);
        }
    }

    handleMessage(message, sender, sendResponse) {
        swDebug('Service Worker получил сообщение:', message.type);

        try {
            switch (message.type) {
                case 'get_inline_ai_settings':
                    this.getInlineAISettings()
                        .then(settings => sendResponse({ success: true, settings }))
                        .catch(error => sendResponse({ success: false, error: error.message }));
                    break;

                case 'get_settings':
                    this.getSettings()
                        .then(settings => sendResponse({ success: true, settings }))
                        .catch(error => sendResponse({ success: false, error: error.message }));
                    break;

                case 'save_settings':
                    this.saveSettings(message.settings)
                        .then(() => sendResponse({ success: true }))
                        .catch(error => sendResponse({ success: false, error: error.message }));
                    break;

                case 'activate_app':
                    this.isActive = true;
                    this.activeTabId = sender.tab?.id;
                    if (this.activeTabId) {
                        this.setTabAutoDiscardable(this.activeTabId, false);
                    }
                    sendResponse({ success: true });
                    break;

                case 'deactivate_app':
                    this.isActive = false;
                    const tabIdToDeactivate = sender.tab?.id || this.activeTabId;
                    if (tabIdToDeactivate) {
                        this.setTabAutoDiscardable(tabIdToDeactivate, true);
                    }
                    this.activeTabId = null;
                    sendResponse({ success: true });
                    break;

                case 'log_error':
                    this.logError(message.error, message.context)
                        .then(() => sendResponse({ success: true }))
                        .catch(error => sendResponse({ success: false, error: error.message }));
                    break;

                case 'ping':
                    sendResponse({ success: true });
                    break;

                case 'decrement_free_parsing':
                    this.decrementFreeParsing({ tg_id: message.tg_id, extension_key: message.extension_key })
                        .then(result => {
                            if (result.success) {
                                sendResponse({ success: true, parsing_left: result.parsing_left, reason: result.reason || 'ok' });
                            } else if (result.skipped) {
                                sendResponse({ success: true, parsing_left: -1, reason: 'pro_user' });
                            } else {
                                sendResponse({ success: false, error: result.error, parsing_left: result.parsing_left });
                            }
                        })
                        .catch(error => sendResponse({ success: false, error: error.message }));
                    break;

                // Случаи, которые просто подтверждают прием сообщения без сложной логики в SW
                case 'typing_progress':
                case 'comments_left_update':
                case 'free_limit_reached':
                case 'auth_invalid':
                case 'post_processed':
                case 'post_reply':
                case 'log_entry':
                case 'action_update':
                case 'plan_downgraded':
                case 'tech_log':
                    sendResponse({ success: true });
                    break;

                default:
                    swDebug('Неизвестный тип сообщения:', message.type);
                    sendResponse({ success: false, error: 'unknown_message_type' });
            }
        } catch (error) {
            console.error('Ошибка обработки сообщения:', error);
            sendResponse({ success: false, error: error.message });
        }
    }

    onThreadsPageLoaded(tabId, tab) {
        swDebug('Threads страница загружена:', tab.url);
        chrome.tabs.sendMessage(tabId, { type: 'page_loaded', url: tab.url }, (response) => {
            if (chrome.runtime.lastError) {
                swDebug('Content script не готов:', chrome.runtime.lastError.message);
            }
        });
    }

    async logError(errorMsg, context) {
        try {
            const errorEntry = {
                timestamp: Date.now(),
                error: errorMsg.toString(),
                context: context || 'unknown',
                url: context?.url || 'unknown'
            };

            const storage = await chrome.storage.local.get(['errorLogs']);
            let errorLogs = storage.errorLogs || [];

            errorLogs.push(errorEntry);
            
            // Ограничиваем лог 100 записями
            if (errorLogs.length > 100) {
                errorLogs.splice(0, errorLogs.length - 100);
            }

            await chrome.storage.local.set({ errorLogs });
            swDebug('Ошибка залогирована:', errorEntry);
        } catch (error) {
            console.error('Ошибка записи лога:', error);
        }
    }
}

// Применяем примеси (mixins) из других файлов
attachSettings(ThreadsAIServiceWorker);
attachLimits(ThreadsAIServiceWorker);

// Инициализируем Service Worker
new ThreadsAIServiceWorker();