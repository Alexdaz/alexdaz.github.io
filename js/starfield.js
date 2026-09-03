/**
 * Builds a "box-shadow" star list: a cheap, well known CSS trick for rendering many dots off one element.
 * Positions use vw/vh so the field always covers the full viewport, including on resize, with no JS recalculation.
 */
function randomShadows(count, color) {
  const shadows = [];
  for (let i = 0; i < count; i += 1) {
    const x = (Math.random() * 100).toFixed(2);
    const y = (Math.random() * 100).toFixed(2);
    shadows.push(`${x}vw ${y}vh ${color}`);
  }
  return shadows.join(', ');
}

function initStarfield() {
  const container = document.querySelector('.starfield');
  if (!container) return;

  const layers = [
    { selector: '[data-star-layer="small"]', count: 140, color: '#e8d9ff' },
    { selector: '[data-star-layer="medium"]', count: 60, color: '#f3ecff' },
    { selector: '[data-star-layer="large"]', count: 20, color: '#ffffff' },
  ];

  layers.forEach(({ selector, count, color }) => {
    const layer = container.querySelector(selector);
    if (layer) layer.style.boxShadow = randomShadows(count, color);
  });
}

export { initStarfield };
