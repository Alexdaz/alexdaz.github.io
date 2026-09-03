function initMobileMenu() {
  const toggle = document.querySelector('[data-nav-toggle]');
  const menu = document.querySelector('[data-nav-menu]');
  if (!toggle || !menu) return;

  const closeMenu = () => {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  const openMenu = () => {
    menu.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  };

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.contains('is-open');
    if (isOpen) closeMenu();
    else openMenu();
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('is-open')) {
      closeMenu();
      toggle.focus();
    }
  });

  document.addEventListener('click', (event) => {
    const clickedInsideNav = event.target.closest('.nav');
    if (!clickedInsideNav && menu.classList.contains('is-open')) closeMenu();
  });
}

function initScrollSpy() {
  const navLinks = Array.from(document.querySelectorAll('[data-nav-link]'));
  if (navLinks.length === 0) return;

  const linkByHash = new Map(navLinks.map((link) => [link.getAttribute('href'), link]));

  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (sections.length === 0) return;

  const setActive = (hash) => {
    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === hash;
      link.classList.toggle('is-active', isActive);
      if (isActive) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) {
        const hash = `#${visible.target.id}`;
        if (linkByHash.has(hash)) setActive(hash);
      }
    },
    { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
  );

  sections.forEach((section) => observer.observe(section));
}

function initNav() {
  initMobileMenu();
  initScrollSpy();
}

export { initNav };
