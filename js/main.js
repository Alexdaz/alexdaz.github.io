import { initTheme } from './theme.js';
import { initRender } from './render.js';
import { initI18n, getLanguage } from './i18n.js';
import { initNav } from './nav.js';
import { initEasterEgg, printConsoleEasterEgg } from './easter-egg.js';
import { initStarfield } from './starfield.js';
import { initMascot } from './mascot.js';

function setFooterYear() {
  const yearEl = document.getElementById('footer-year');
  
  if (yearEl) { 
    yearEl.textContent = String(new Date().getFullYear()); 
  }
}

function init() {
  initTheme();
  
  const lang = initI18n();
  initRender(lang);

  initNav();
  initEasterEgg();
  initStarfield();
  initMascot();
  setFooterYear();
  printConsoleEasterEgg(getLanguage());
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
