document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('userInput');
  const sendBtn = document.getElementById('sendMessage');
  const messages = document.getElementById('chatMessages');
  const intro = document.getElementById('chatIntro');

  function appendMessage(text, sender = 'user') {
    const div = document.createElement('div');
    div.className = 'chat-message ' + sender;
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  sendBtn.addEventListener('click', sendMessage);
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') sendMessage();
  });

  let introHidden = false;
  function sendMessage() {
    const msg = input.value.trim();
    if (!msg) return;
    appendMessage(msg, 'user');
    input.value = '';

    // Intro nach erster Nachricht ausblenden
    if (!introHidden && intro) {
      intro.classList.add('hidden');
      introHidden = true;
    }

    // --- WEBHOOK-ANBINDUNG ---
    fetch('https://vietze.app.n8n.cloud/webhook/cc2c09e8-6b0a-4d02-8c7e-c2d15d8014c2/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: msg })
    })
    .then(res => {
      if (!res.ok) throw new Error('Serverfehler');
      return res.json();
    })
    .then(data => {
      // Passe "data.reply" ggf. an das tatsächliche Feld deines Webhook-Outputs an!
      appendMessage(data.reply || 'Keine Antwort vom Server.', 'bot');
    })
    .catch(() => {
      appendMessage('Fehler bei der Verbindung zum Server.', 'bot');
    });
    // --- ENDE WEBHOOK ---
  }
});
