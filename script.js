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

    setTimeout(() => {
      appendMessage('Dies ist eine automatische Trading-Chatbot-Antwort.', 'bot');
    }, 700);
  }
});
