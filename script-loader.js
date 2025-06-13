// Universeller Script-Loader für Chatbot-Widget (Ready-to-Use)
(function () {
  // Präfix für alle IDs & Verhindern von Duplikaten
  const PREFIX = 'elali-chatbot-';
  if (document.getElementById(PREFIX + 'launcher')) return;

  // Chat Bubble (Button)
  const bubble = document.createElement('div');
  bubble.id = PREFIX + 'launcher';
  bubble.innerHTML = '💬';
  Object.assign(bubble.style, {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: '#18181C',
    color: '#e6c373',
    fontSize: '26px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    zIndex: '99999',
    boxShadow: '0 4px 12px rgba(230,195,115,0.18)',
    border: '2px solid #e6c373',
    transition: 'box-shadow 0.2s',
  });
  bubble.title = 'Chatbot öffnen';
  document.body.appendChild(bubble);

  // Chat iframe container
  const container = document.createElement('div');
  container.id = PREFIX + 'container';
  Object.assign(container.style, {
    position: 'fixed',
    bottom: '90px',
    right: '20px',
    width: '380px',
    height: '600px',
    display: 'none',
    zIndex: '99998',
    boxShadow: '0 12px 24px rgba(0,0,0,0.25)',
    borderRadius: '12px',
    overflow: 'hidden',
    background: '#fff',
    maxWidth: '95vw',
    maxHeight: '85vh',
  });
  document.body.appendChild(container);

  // Close button
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '×';
  Object.assign(closeBtn.style, {
    position: 'absolute',
    top: '6px',
    right: '10px',
    fontSize: '22px',
    fontWeight: 'bold',
    color: '#999',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    zIndex: '10',
    lineHeight: '1',
  });
  closeBtn.title = 'Schließen';
  container.appendChild(closeBtn);

  // Iframe
  const iframe = document.createElement('iframe');
  iframe.src = 'https://elali-git-main-luccas-projects-96a45b76.vercel.app/embed/index.html';
  Object.assign(iframe.style, {
    width: '100%',
    height: '100%',
    border: 'none',
    borderRadius: '12px',
    background: '#fff',
  });
  iframe.title = 'Elali Chatbot Widget';
  iframe.setAttribute('allow', 'clipboard-write; clipboard-read');
  container.appendChild(iframe);

  // Toggle Verhalten
  bubble.addEventListener('click', () => {
    container.style.display = 'block';
    bubble.style.display = 'none';
  });

  closeBtn.addEventListener('click', () => {
    container.style.display = 'none';
    bubble.style.display = 'flex';
  });

  // Optional: Bubble Hover Effekt
  bubble.addEventListener('mouseenter', () => {
    bubble.style.boxShadow = '0 6px 18px rgba(230,195,115,0.32)';
  });
  bubble.addEventListener('mouseleave', () => {
    bubble.style.boxShadow = '0 4px 12px rgba(230,195,115,0.18)';
  });

  // Optional: Responsives Verhalten bei zu kleinem Viewport
  function adjustContainerSize() {
    if (window.innerWidth < 400) {
      container.style.width = '95vw';
      container.style.height = '70vh';
    } else {
      container.style.width = '380px';
      container.style.height = '600px';
    }
  }
  window.addEventListener('resize', adjustContainerSize);
  adjustContainerSize();
})();
