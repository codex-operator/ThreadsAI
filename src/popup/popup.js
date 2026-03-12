import { $, formatTime } from './popup-utils.js';

// ── Состояние ───────────────────────────────────────────────
let isRunning      = false;
let settings       = {};
let commentCount   = 0;
let processedCount = 0;

// ── Инициализация ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  await loadSettings();
  bindEvents();
  updateUI();
});

// ── Загрузка настроек ────────────────────────────────────────
async function loadSettings() {
  const response = await chrome.runtime.sendMessage({ type: 'get_settings' });
  settings = response?.settings || {};
  applySettingsToForm(settings);
}

function applySettingsToForm(s) {
  if ($('#ai-provider'))    $('#ai-provider').value    = s.aiProvider   || 'openai';
  if ($('#openai-api-key')) $('#openai-api-key').value = s.openaiApiKey || '';
  if ($('#gemini-api-key')) $('#gemini-api-key').value = s.geminiApiKey || '';
  if ($('#gemini-model'))   $('#gemini-model').value   = s.geminiModel  || 'gemini-2.0-flash';
  if ($('#gpt-model'))      $('#gpt-model').value      = s.gptModel     || 'gpt-4o-mini';
  if ($('#comment-style'))  $('#comment-style').value  = s.commentStyle || 'friendly';
  if ($('#custom-prompt'))  $('#custom-prompt').value  = s.customPrompt || '';
  if ($('#max-comments'))   $('#max-comments').value   = s.maxComments  || 10;
  if ($('#delay-min'))      $('#delay-min').value      = s.delayMin     || 30;
  if ($('#delay-max'))      $('#delay-max').value      = s.delayMax     || 60;
  if ($('#skip-replied'))   $('#skip-replied').checked = s.skipReplied  !== false;
  toggleProviderSections(s.aiProvider || 'openai');
  toggleCustomPrompt(s.commentStyle);
}

// ── Биндинг событий ──────────────────────────────────────────
function bindEvents() {
  $('#action-button')?.addEventListener('click', toggleRunning);

  $('#btn-settings')?.addEventListener('click', () => {
    $('#settings-modal')?.classList.add('open');
  });
  $('#close-settings')?.addEventListener('click', () => {
    $('#settings-modal')?.classList.remove('open');
  });
  $('#save-settings')?.addEventListener('click', saveSettings);

  $('#ai-provider')?.addEventListener('change', (e) => {
    toggleProviderSections(e.target.value);
  });

  $('#comment-style')?.addEventListener('change', (e) => {
    toggleCustomPrompt(e.target.value);
  });

  $('#btn-copy-log')?.addEventListener('click',  copyLog);
  $('#btn-clear-log')?.addEventListener('click', clearLog);

  document.querySelectorAll('.log-tab').forEach((tab) => {
    tab.addEventListener('click', () => switchTab(tab.dataset.tab));
  });

  $('#btn-inline-mode')?.addEventListener('click', toggleInlineMode);
}

function toggleProviderSections(provider) {
  const isOpenAI = provider === 'openai';
  if ($('#openai-section')) $('#openai-section').style.display = isOpenAI ? '' : 'none';
  if ($('#gemini-section')) $('#gemini-section').style.display = isOpenAI ? 'none' : '';
  const gptGroup = $('#gpt-model')?.closest('.form-group');
  if (gptGroup) gptGroup.style.display = isOpenAI ? '' : 'none';
}

function toggleCustomPrompt(style) {
  const group = $('#custom-prompt-group');
  if (group) group.style.display = (style === 'custom') ? 'block' : 'none';
}

// ── Сохранение настроек ──────────────────────────────────────
async function saveSettings() {
  const newSettings = {
    aiProvider:    $('#ai-provider')?.value            || 'openai',
    openaiApiKey:  $('#openai-api-key')?.value.trim()  || '',
    geminiApiKey:  $('#gemini-api-key')?.value.trim()  || '',
    geminiModel:   $('#gemini-model')?.value            || 'gemini-2.0-flash',
    gptModel:      $('#gpt-model')?.value               || 'gpt-4o-mini',
    commentStyle:  $('#comment-style')?.value           || 'friendly',
    customPrompt:  $('#custom-prompt')?.value.trim()    || '',
    maxComments:   parseInt($('#max-comments')?.value)  || 10,
    delayMin:      parseInt($('#delay-min')?.value)     || 30,
    delayMax:      parseInt($('#delay-max')?.value)     || 60,
    skipReplied:   $('#skip-replied')?.checked          ?? true,
  };

  await chrome.runtime.sendMessage({ type: 'save_settings', settings: newSettings });
  settings = newSettings;
  addLog('✅ Настройки сохранены');
  $('#settings-modal')?.classList.remove('open');
}

// ── Старт / Стоп ─────────────────────────────────────────────
async function toggleRunning() {
  if (!isRunning) {
    const provider = settings.aiProvider || 'openai';
    const hasKey   = provider === 'gemini' ? settings.geminiApiKey : settings.openaiApiKey;
    if (!hasKey) {
      addLog(`❌ Укажите ${provider === 'gemini' ? 'Gemini' : 'OpenAI'} API Key в настройках`);
      $('#settings-modal')?.classList.add('open');
      return;
    }

    isRunning      = true;
    commentCount   = 0;
    processedCount = 0;
    updateUI();
    addLog('▶️ Запущено');
    await chrome.runtime.sendMessage({ type: 'activate_app' });
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab?.id) {
      chrome.tabs.sendMessage(tab.id, { type: 'start', settings });
    }
  } else {
    isRunning = false;
    updateUI();
    addLog('⏹ Остановлено');
    await chrome.runtime.sendMessage({ type: 'deactivate_app' });
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab?.id) {
      chrome.tabs.sendMessage(tab.id, { type: 'stop' });
    }
  }
}

// ── UI ───────────────────────────────────────────────────────
function updateUI() {
  const btn = $('#action-button');
  if (btn) {
    btn.textContent = isRunning ? 'Остановить' : 'Начать';
    btn.className   = isRunning ? 'btn btn-danger' : 'btn btn-primary';
  }
  const counter = $('#comment-counter');
  if (counter) counter.textContent = commentCount;
  const procCounter = $('#processed-counter');
  if (procCounter) procCounter.textContent = processedCount;

  const max  = settings.maxComments || 10;
  const fill = $('#progress-fill');
  const text = $('#progress-text');
  if (fill) fill.style.width = `${Math.min((commentCount / max) * 100, 100)}%`;
  if (text) text.textContent = `${commentCount} / ${max}`;
}

// ── Логи ─────────────────────────────────────────────────────
function addLog(text) {
  const log = $('#activity-log');
  if (!log) return;
  const line = document.createElement('div');
  line.className   = 'log-line';
  line.textContent = `[${formatTime()}] ${text}`;
  log.appendChild(line);
  log.scrollTop = log.scrollHeight;
}

function copyLog() {
  const text = $('#activity-log')?.innerText || '';
  navigator.clipboard.writeText(text).catch(() => {});
}

function clearLog() {
  const log = $('#activity-log');
  if (log) log.innerHTML = '';
}

function switchTab(tabName) {
  document.querySelectorAll('.log-tab').forEach((t) => {
    t.classList.toggle('active', t.dataset.tab === tabName);
  });
  if ($('#activity-log')) $('#activity-log').style.display = (tabName === 'log')   ? 'block' : 'none';
  if ($('#posts-log'))    $('#posts-log').style.display    = (tabName === 'posts')  ? 'block' : 'none';
}

// ── Инлайн режим ─────────────────────────────────────────────
async function toggleInlineMode() {
  settings.inlineModeEnabled = !settings.inlineModeEnabled;
  $('#btn-inline-mode')?.classList.toggle('active', settings.inlineModeEnabled);
  await chrome.runtime.sendMessage({
    type: 'save_settings',
    settings: { inlineModeEnabled: settings.inlineModeEnabled },
  });
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab?.id) {
    chrome.tabs.sendMessage(tab.id, {
      type: settings.inlineModeEnabled ? 'enable_inline' : 'disable_inline',
    });
  }
}

// ── Сообщения от content-script ──────────────────────────────
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === 'log')            addLog(msg.text);
  if (msg.type === 'comment_done')   { commentCount++;   updateUI(); }
  if (msg.type === 'post_processed') { processedCount++; updateUI(); }
  if (msg.type === 'finished')       { isRunning = false; updateUI(); addLog('✅ Завершено'); }
});