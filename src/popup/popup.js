const fields = {
  gptModel: document.getElementById('gpt-model'),
  maxComments: document.getElementById('max-comments'),
  delayMin: document.getElementById('delay-min'),
  delayMax: document.getElementById('delay-max')
};

const saveButton = document.getElementById('save-settings');
const toggleButton = document.getElementById('toggle-app');
const statusNode = document.getElementById('status');

let isRunning = false;

function setStatus(text) {
  statusNode.textContent = text;
}

function renderSettings(settings) {
  fields.gptModel.value = settings.gptModel;
  fields.maxComments.value = settings.maxComments;
  fields.delayMin.value = settings.delayMin;
  fields.delayMax.value = settings.delayMax;
}

async function loadSettings() {
  const response = await chrome.runtime.sendMessage({ type: 'get_settings' });
  if (!response?.success) {
    throw new Error(response?.error || 'Не удалось загрузить настройки');
  }
  renderSettings(response.settings);
}

async function saveSettings() {
  const settings = {
    gptModel: fields.gptModel.value,
    maxComments: Number(fields.maxComments.value) || 10,
    delayMin: Number(fields.delayMin.value) || 30,
    delayMax: Number(fields.delayMax.value) || 60
  };

  if (settings.delayMin > settings.delayMax) {
    throw new Error('Минимальная задержка больше максимальной');
  }

  const response = await chrome.runtime.sendMessage({ type: 'save_settings', settings });
  if (!response?.success) {
    throw new Error(response?.error || 'Не удалось сохранить настройки');
  }
}

async function toggleApp() {
  const type = isRunning ? 'deactivate_app' : 'activate_app';
  const response = await chrome.runtime.sendMessage({ type });
  if (!response?.success) {
    throw new Error(response?.error || 'Не удалось переключить режим');
  }

  isRunning = !isRunning;
  toggleButton.textContent = isRunning ? 'Остановить' : 'Запустить';
  setStatus(isRunning ? 'Режим: запущено' : 'Режим: остановлено');
}

saveButton.addEventListener('click', async () => {
  try {
    await saveSettings();
    setStatus('Настройки сохранены');
  } catch (error) {
    setStatus(error.message);
  }
});

toggleButton.addEventListener('click', async () => {
  try {
    await toggleApp();
  } catch (error) {
    setStatus(error.message);
  }
});

loadSettings()
  .then(() => setStatus('Готово'))
  .catch((error) => setStatus(error.message));
