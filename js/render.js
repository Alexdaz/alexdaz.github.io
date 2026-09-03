import { content } from './data.js';

//Creates an element with optional class name and text content.
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

function renderInterests(lang) {
  const container = document.getElementById('about-interests');
  if (!container) return;

  container.replaceChildren(
    ...content[lang].about.interests.map((interest) => el('li', 'tag', interest))
  );
}

function renderExperience(lang) {
  const container = document.getElementById('experience-list');
  if (!container) return;

  const items = content[lang].experience.items.map((job) => {
    const item = el('li', 'timeline__item');
    item.appendChild(el('span', 'timeline__marker'));

    const bodyEl = el('div');

    const header = el('div', 'timeline__header');
    header.appendChild(el('h3', 'timeline__role', job.role));
    header.appendChild(el('span', 'timeline__company', job.company));
    bodyEl.appendChild(header);

    const meta = el('div', 'timeline__meta');
    meta.appendChild(el('span', 'timeline__period', job.period));
    meta.appendChild(el('span', 'timeline__location', job.location));
    bodyEl.appendChild(meta);

    const bullets = el('ul', 'timeline__bullets');
    bullets.replaceChildren(...job.bullets.map((bullet) => el('li', undefined, bullet)));
    bodyEl.appendChild(bullets);

    item.appendChild(bodyEl);
    return item;
  });

  container.replaceChildren(...items);
}

function renderSkills(lang) {
  const container = document.getElementById('skills-list');
  if (!container) return;

  const cards = content[lang].skills.categories.map((category) => {
    const card = el('div', 'card');
    card.appendChild(el('h3', 'skills__category', category.name));

    const tagList = el('ul', 'tag-list');
    tagList.replaceChildren(...category.items.map((item) => el('li', 'tag', item)));
    card.appendChild(tagList);

    return card;
  });

  container.replaceChildren(...cards);
}

function renderEducation(lang) {
  const degreesContainer = document.getElementById('education-list');
  const certsContainer = document.getElementById('certifications-list');
  const { degrees, certs } = content[lang].education;

  if (degreesContainer) {
    const cards = degrees.map((degree) => {
      const card = el('div', 'card');

      const header = el('div', 'education__header');
      header.appendChild(el('h3', 'education__school', degree.school));
      header.appendChild(el('span', 'education__period', degree.period));
      card.appendChild(header);

      card.appendChild(el('p', 'education__program', `${degree.program} · ${degree.location}`));
      card.appendChild(el('p', 'education__description', degree.description));

      return card;
    });

    degreesContainer.replaceChildren(...cards);
  }

  if (certsContainer) {
    certsContainer.replaceChildren(...certs.map((cert) => el('li', 'cert-list__item', cert)));
  }
}

function renderAll(lang) {
  renderInterests(lang);
  renderExperience(lang);
  renderSkills(lang);
  renderEducation(lang);
}

/** 
 * Renders all dynamic sections for the given language and subscribes to future
 * language changes. Takes the initial language explicitly so correctness doesn't
 * depend on being called before initI18n() dispatches its first event.
 */
function initRender(initialLang) {
  renderAll(initialLang);
  document.addEventListener('languagechange', (event) => renderAll(event.detail.lang));
}

export { initRender };
