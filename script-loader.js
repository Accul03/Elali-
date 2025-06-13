(function () {
  // Verhindere Duplikate
  if (document.getElementById('chatbot-launcher')) return;

  // 🔘 Chat Bubble (Button)
  const bubble = document.createElement('div');
  bubble.id = 'chatbot-launcher';
  bubble.innerHTML = '💬';
  bubble.style.position = 'fixed';
  bubble.style.bottom = '20px';
  bubble.style.right = '20px';
  bubble.style.width = '60px';
  bubble.style.height = '60px';
  bubble.style.borderRadius = '50%';
  bubble.style.backgroundColor = '#18181C'; // schwarz
  bubble.style.color = '#e6c373'; // gold
  bubble.style.fontSize = '26px';
  bubble.style.display = 'flex';
  bubble.style.justifyContent = 'center';
  bubble.style.alignItems = 'center';
  bubble.style.cursor = 'pointer';
  bubble.style.zIndex = '99999';
  bubble.style.boxShadow = '0 4px 12px rgba(230,195,115,0.18)';
  bubble.style.border = '2px solid #e6c373';
  document.body.appendChild(bubble);

  // 🧠 Chat iframe container
  const container = document.createElement('div');
  container.id = 'chatbot-container';
  container.style.position = 'fixed';
  container.style.bottom = '90px';
  container.style.right = '20px';
  container.style.width = '380px';
  container.style.height = '600px';
  container.style.display = 'none';
  container.style.zIndex = '99998';
  container.style.boxShadow = '0 12px 24px rgba(0,0,0,0.25)';
  container.style.borderRadius = '12px';
  container.style.overflow = 'hidden';
  document.body.appendChild(container);

  // ❌ Close button
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '×';
  closeBtn.style.position = 'absolute';
  closeBtn.style.top = '6px';
  closeBtn.style.right = '10px';
  closeBtn.style.fontSize = '22px';
  closeBtn.style.fontWeight = 'bold';
  closeBtn.style.color = '#999';
  closeBtn.style.background = 'transparent';
  closeBtn.style.border = 'none';
  closeBtn.style.cursor = 'pointer';
  closeBtn.style.zIndex = '10';
  container.appendChild(closeBtn);

  // 🪟 Iframe
  const iframe = document.createElement('iframe');
  iframe.src = 'https://elali-git-main-luccas-projects-96a45b76.vercel.app/embed/index.html';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.style.borderRadius = '12px';
  container.appendChild(iframe);

  // 🧩 Toggle Verhalten
  bubble.addEventListener('click', () => {
    container.style.display = 'block';
    bubble.style.display = 'none';
  });

  closeBtn.addEventListener('click', () => {
    container.style.display = 'none';
    bubble.style.display = 'flex';
  });
})();
