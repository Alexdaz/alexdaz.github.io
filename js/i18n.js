import { content, SUPPORTED_LANGS, DEFAULT_LANG } from './data.js';

const STORAGE_KEY = 'alexdiaz:lang';

//Resolves a dot separated path (e.g. "hero.title") against an object.
function resolvePath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && key in acc ? acc[key] : undefined), obj);
}

function detectInitialLang() {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED_LANGS.includes(stored)) return stored;

  const browserLang = (navigator.language || '').slice(0, 2).toLowerCase();
  if (SUPPORTED_LANGS.includes(browserLang)) return browserLang;

  return DEFAULT_LANG;
}

//Applies translated text to every element carrying a data i18n attribute.
function applyStaticText(lang) {
  const dict = content[lang];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = resolvePath(dict, el.dataset.i18n);
    if (typeof value === 'string') el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    const pairs = el.dataset.i18nAttr.split(';').filter(Boolean);
    pairs.forEach((pair) => {
      const [attr, path] = pair.split(':').map((s) => s.trim());
      const value = resolvePath(dict, path);
      if (attr && typeof value === 'string') el.setAttribute(attr, value);
    });
  });
}

function updateDocumentMeta(lang) {
  const { meta } = content[lang];
  document.documentElement.lang = lang;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', meta.description);
}

function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;

  window.localStorage.setItem(STORAGE_KEY, lang);
  applyStaticText(lang);
  updateDocumentMeta(lang);
  document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
}

function getLanguage() {
  return document.documentElement.lang || DEFAULT_LANG;
}

//Initializes i18n and returns the resolved initial language, so callers don't have to guess it.
function initI18n() {
  const initialLang = detectInitialLang();
  setLanguage(initialLang);

  const toggleButtons = document.querySelectorAll('[data-lang-toggle]');
  toggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const next = getLanguage() === 'es' ? 'en' : 'es';
      setLanguage(next);
    });
  });

  return initialLang;
}

export { initI18n, getLanguage };
