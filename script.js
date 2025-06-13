function parseMarkdown(text) {
  // Wandelt Markdown-Links [Text](URL) in klickbare HTML-Links um
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
}

document.addEventListener('DOMContentLoaded', () => {
  const sendMessage = document.getElementById('sendMessage');
  const userInput = document.getElementById('userInput');
  const chatMessages = document.getElementById('chatMessages');

  // Nachrichten senden per Button
  sendMessage.addEventListener('click', handleSend);

  // Nachrichten senden per Enter-Taste
  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  });

  function handleSend() {
    const msg = userInput.value.trim();
    if (!msg) return;

    appendMessage(msg, 'user');
    userInput.value = '';

    // POST an N8n Webhook
    fetch('https://vietze.app.n8n.cloud/webhook/cc2c09e8-6b0a-4d02-8c7e-c2d15d8014c2/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: msg })
    })
    .then(res => res.json())
    .then(data => {
      const reply = data.reply || data.message || '🤖 Keine Antwort erhalten.';
      appendMessage(reply, 'bot');
    })
    .catch(err => {
      console.error('[Chatbot Fehler]', err);
      appendMessage('⚠️ Es gab ein Verbindungsproblem zum Server.', 'bot');
    });
  }

  function appendMessage(text, sender = 'bot') {
    const div = document.createElement('div');
    div.className = `chat-message ${sender}`;
    div.innerHTML = parseMarkdown(text);
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});
