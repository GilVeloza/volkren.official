// hand.js

// Inicializa Tippy.js en todos los elementos .finger
document.addEventListener('DOMContentLoaded', () => {
    tippy('.finger', {
      theme: 'light-border',
      animation: 'scale',
      delay: [100, 50],
      placement: 'right',
      arrow: true,
      maxWidth: 220,
      followCursor: true
    });
  });
  