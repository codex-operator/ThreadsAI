chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message?.type === 'ping') {
    sendResponse({ success: true, source: 'content-script' });
    return;
  }

  sendResponse({ success: false, error: 'unsupported_message_type' });
});
