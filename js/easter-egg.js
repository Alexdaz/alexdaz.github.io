import { content } from './data.js';

const KONAMI_CODE = [
  'arrowup',
  'arrowup',
  'arrowdown',
  'arrowdown',
  'arrowleft',
  'arrowright',
  'arrowleft',
  'arrowright',
  'b',
  'a',
];

let progress = 0;
let lastFocused = null;

function openModal(modal) {
  lastFocused = document.activeElement;
  modal.hidden = false;
  modal.querySelector('.easter-egg__close')?.focus();
}

function closeModal(modal) {
  modal.hidden = true;
  if (lastFocused instanceof HTMLElement) lastFocused.focus();
}

function initEasterEgg() {
  const modal = document.getElementById('easter-egg');
  if (!modal) return;

  modal.querySelectorAll('[data-easter-egg-dismiss]').forEach((el) => {
    el.addEventListener('click', () => closeModal(modal));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) {
      closeModal(modal);
      return;
    }

    const key = event.key.toLowerCase();
    progress = key === KONAMI_CODE[progress] ? progress + 1 : key === KONAMI_CODE[0] ? 1 : 0;

    if (progress === KONAMI_CODE.length) {
      progress = 0;
      openModal(modal);
    }
  });
}

//A quiet nod for anyone who pops open DevTools, printed once on page load.
function printConsoleEasterEgg(lang) {
  const t = content[lang]?.easterEgg;
  if (!t) return;

  const titleStyle =
    'font-size:14px; font-weight:bold; color:#ff17d4; background:#0d0715; padding:4px 10px; border-radius:4px;';
  const bodyStyle = 'color:#8b3ff0; font-family:monospace; font-size:12px;';

  console.log('%cEspeon says hi ✨', titleStyle);
  console.log(`%c${t.consoleGreeting}`, bodyStyle);
  console.log(`%c${t.consoleHint}`, bodyStyle);
}

export { initEasterEgg, printConsoleEasterEgg };
