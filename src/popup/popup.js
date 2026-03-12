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
  if ($('#openai-api-key')) $('#openai-api-key').value  = s.openaiApiKey  || '';
  if ($('#gpt-model'))      $('#gpt-model').value       = s.gptModel      || 'gpt-4o-mini';
  if ($('#comment-style'))  $('#comment-style').value   = s.commentStyle  || 'friendly';
  if ($('#custom-prompt'))  $('#custom-prompt').value   = s.customPrompt  || '';
  if ($('#max-comments'))   $('#max-comments').value    = s.maxComments   || 10;
  if ($('#delay-min'))      $('#delay-min').value       = s.delayMin      || 30;
  if ($('#delay-max'))      $('#delay-max').value       = s.delayMax      || 60;
  if ($('#skip-replied'))   $('#skip-replied').checked  = s.skipReplied   !== false;
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

function toggleCustomPrompt(style) {
  const group = $('#custom-prompt-group');
  if (group) group.style.display = (style === 'custom') ? 'block' : 'none';
}

// ── Сохранение настроек ──────────────────────────────────────
async function saveSettings() {
  const newSettings = {
    openaiApiKey:  $('#openai-api-key')?.value.trim() || '',
    gptModel:      $('#gpt-model')?.value             || 'gpt-4o-mini',
    commentStyle:  $('#comment-style')?.value         || 'friendly',
    customPrompt:  $('#custom-prompt')?.value.trim()  || '',
    maxComments:   parseInt($('#max-comments')?.value) || 10,
    delayMin:      parseInt($('#delay-min')?.value)    || 30,
    delayMax:      parseInt($('#delay-max')?.value)    || 60,
    skipReplied:   $('#skip-replied')?.checked         ?? true,
  };

  await chrome.runtime.sendMessage({ type: 'save_settings', settings: newSettings });
  settings = newSettings;
  addLog('✅ Настройки сохранены');
  $('#settings-modal')?.classList.remove('open');
}

// ── Старт / Стоп ─────────────────────────────────────────────
async function toggleRunning() {
  if (!isRunning) {
    if (!settings.openaiApiKey) {
      addLog('❌ Укажите OpenAI API Key в настройках');
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
  if (msg.type === 'log')             addLog(msg.text);
  if (msg.type === 'comment_done')    { commentCount++;    updateUI(); }
  if (msg.type === 'post_processed')  { processedCount++;  updateUI(); }
  if (msg.type === 'finished')        { isRunning = false; updateUI(); addLog('✅ Завершено'); }
});
