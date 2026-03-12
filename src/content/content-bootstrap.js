(() => {
    // Проверяем, загружен ли основной класс расширения
    if (!globalThis.ThreadsAIContentScript) return;
    
    // Защита от двойной инициализации (чтобы скрипт не работал дважды на одной вкладке)
    if (globalThis.__threadsAIBootstrapped) return;
    globalThis.__threadsAIBootstrapped = true;

    let instance = null;

    const init = () => {
        if (instance) return;
        instance = new globalThis.ThreadsAIContentScript();
    };

    // Ждем загрузки DOM или запускаем сразу, если страница уже загружена
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }
})();