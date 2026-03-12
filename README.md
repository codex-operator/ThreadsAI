# ThreadsAI v2.0

Расширение Chrome для автоматической генерации и публикации комментариев на Threads.net с использованием OpenAI API.

## Что изменилось в v2.0

- ✅ Убрана привязка к Telegram — расширение полностью автономное
- ✅ Убрана авторизация через Supabase
- ✅ API-ключ OpenAI вводится прямо в настройках расширения
- ✅ Весь код переписан в читаемый вид (убрана обфускация)
- ✅ Прямые запросы к OpenAI API (без прокси)

## Структура проекта

```
ThreadsAI/
├── manifest.json                      # Манифест расширения
├── src/
│   ├── config.js                      # Реэкспорт констант и промптов
│   ├── shared/
│   │   ├── constants.js               # Настройки по умолчанию
│   │   ├── prompts.js                 # Готовые стили комментариев
│   │   └── api-config.js              # URL OpenAI API
│   ├── background/
│   │   ├── service-worker.js          # Основной сервис-воркер
│   │   └── background-settings.js     # Вспомогательный модуль настроек
│   ├── content/
│   │   ├── feed-parser.js             # Наблюдатель за лентой
│   │   ├── content-script.js          # Главный класс (запуск/остановка)
│   │   ├── content-settings.js        # История прокомментированных постов
│   │   ├── content-inline.js          # Инлайн-кнопка "✨ AI"
│   │   ├── content-parser.js          # Парсинг постов из DOM
│   │   └── content-bootstrap.js       # Точка входа, инициализация
│   ├── popup/
│   │   ├── popup.html                 # UI попапа
│   │   ├── popup.css                  # Стили
│   │   ├── popup.js                   # Логика попапа
│   │   └── popup-utils.js             # Утилиты (sendMsg, $, formatTime)
│   └── icons/
│       ├── icon16.png
│       ├── icon32.png
│       ├── icon48.png
│       └── icon128.png
```

## Установка

1. Откройте `chrome://extensions`
2. Включите **"Режим разработчика"** (Developer mode) в правом верхнем углу
3. Нажмите **"Загрузить распакованное"** (Load unpacked)
4. Выберите папку `ThreadsAI`
5. Расширение появится в панели браузера

## Настройка API-ключа

1. Зайдите на [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
2. Нажмите **"Create new secret key"**
3. Скопируйте ключ (начинается с `sk-...`)
4. Откройте расширение → нажмите ⚙️ → вставьте ключ в поле **"OpenAI API Key"**
5. Нажмите **"Сохранить"**

## Доступные модели

| Модель | Скорость | Цена | Качество |
|---|---|---|---|
| `gpt-4o-mini` | ⚡ Быстро | 💚 Дёшево | Хорошее |
| `gpt-4o` | Средне | 🟡 Средняя | Отличное |
| `gpt-4-turbo` | Медленно | 🔴 Дорого | Отличное |
| `gpt-3.5-turbo` | ⚡ Быстро | 💚 Очень дёшево | Приемлемое |

## Использование

1. Перейдите на [threads.net](https://www.threads.net)
2. Нажмите на иконку расширения
3. Нажмите **"Начать"**
4. Расширение будет автоматически находить посты и оставлять комментарии

### Инлайн режим

Нажмите кнопку ✏️ в шапке — на каждое поле комментария появится кнопка **"✨ AI"**
для генерации одного комментария вручную.

## Стили комментариев

- **Дружелюбный** — позитивный, искренний тон
- **Профессиональный** — деловой, с добавленной ценностью
- **Любопытный** — задаёт вопросы, проявляет интерес
- **С юмором** — лёгкий, остроумный
- **Свой промпт** — полностью кастомизируемый

## Подключение других моделей

### Claude (Anthropic)

В `src/background/service-worker.js` замените метод `generateComment`:

```javascript
const response = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: {
    'Content-Type':      'application/json',
    'x-api-key':         openaiApiKey,  // вставьте Anthropic API key
    'anthropic-version': '2023-06-01',
  },
  body: JSON.stringify({
    model:      'claude-3-haiku-20240307',
    max_tokens: 150,
    system:     systemPrompt,
    messages: [{ role: 'user', content: `Пост: ${postText}` }],
  }),
});
const data    = await response.json();
const comment = data.content?.[0]?.text?.trim();
```

Добавьте в `manifest.json` → `host_permissions`:
```json
"https://api.anthropic.com/*"
```

### Gemini (Google)

```javascript
const response = await fetch(
  `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${openaiApiKey}`,
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: `${systemPrompt}\n\nПост: ${postText}` }] }]
    }),
  }
);
const data    = await response.json();
const comment = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
```

Добавьте в `manifest.json` → `host_permissions`:
```json
"https://generativelanguage.googleapis.com/*"
```
