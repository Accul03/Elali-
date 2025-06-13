function parseMarkdown(text) {
  // Wandelt Markdown-Links [Text](URL) in klickbare HTML-Links um
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
}

document.addEventListener('DOMContentLoaded', () => {
  const sendMessage = document.getElementById('sendMessage');
  const userInput = document.getElementById('userInput');
  const chatMessages = document.getElementById('chatMessages');
  const intro = document.getElementById('chatIntro');

  // Nachrichten senden per Button
  sendMessage.addEventListener('click', handleSend);

  // Nachrichten senden per Enter-Taste
  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  });

  let introHidden = false;
  function handleSend() {
    const msg = userInput.value.trim();
    if (!msg) return;

    appendMessage(msg, 'user');
    userInput.value = '';

    // Intro nach erster Nachricht ausblenden
    if (!introHidden && intro) {
      intro.classList.add('hidden');
      introHidden = true;
    }

    // POST an N8n Webhook
    fetch('https://vietze.app.n8n.cloud/webhook/cc2c09e8-6b0a
