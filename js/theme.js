const STORAGE_KEY = 'alexdiaz:theme';
const THEMES = ['light', 'dark'];

function detectInitialTheme() {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && THEMES.includes(stored)) return stored;

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;

  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    button.setAttribute('aria-pressed', String(theme === 'dark'));
    const icon = button.querySelector('[data-theme-icon]');
    if (icon) {
      icon.classList.toggle('icon--sun', theme === 'dark');
      icon.classList.toggle('icon--moon', theme !== 'dark');
    }
  });
}

function setTheme(theme) {
  if (!THEMES.includes(theme)) return;
  window.localStorage.setItem(STORAGE_KEY, theme);
  applyTheme(theme);
}

function getTheme() {
  return document.documentElement.dataset.theme || 'light';
}

function initTheme() {
  applyTheme(detectInitialTheme());

  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      setTheme(getTheme() === 'dark' ? 'light' : 'dark');
    });
  });

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  mediaQuery.addEventListener('change', (event) => {
    if (!window.localStorage.getItem(STORAGE_KEY)) {
      applyTheme(event.matches ? 'dark' : 'light');
    }
  });
}

export { initTheme };
