import { content } from './data.js';

let hideTimer = null;

function pickQuip(lang) {
  const quips = content[lang]?.mascot?.quips ?? [];
  if (quips.length === 0) return '';
  return quips[Math.floor(Math.random() * quips.length)];
}

function showBubble(bubble, text) {
  document.getElementById('mascot-bubble-text').textContent = text;
  bubble.hidden = false;

  clearTimeout(hideTimer);
  hideTimer = setTimeout(() => {
    bubble.hidden = true;
  }, 4000);
}

function initMascot() {
  const button = document.getElementById('mascot-button');
  const bubble = document.getElementById('mascot-bubble');
  if (!button || !bubble) return;

  button.addEventListener('click', () => {
    const lang = document.documentElement.lang;
    if (!bubble.hidden) {
      bubble.hidden = true;
      clearTimeout(hideTimer);
      return;
    }
    showBubble(bubble, pickQuip(lang));
  });

  document.addEventListener('click', (event) => {
    if (!bubble.hidden && !event.target.closest('.mascot')) {
      bubble.hidden = true;
      clearTimeout(hideTimer);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !bubble.hidden) {
      bubble.hidden = true;
      clearTimeout(hideTimer);
    }
  });
}

export { initMascot };
