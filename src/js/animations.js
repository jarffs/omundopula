/**
 * Animations Module
 * Scroll-triggered reveal animations using IntersectionObserver.
 */

/**
 * Initialize scroll-triggered animations on elements with [data-animate].
 * @param {string} selector - CSS selector for animated elements
 * @param {IntersectionObserverInit} options - Observer options
 */
export function initScrollAnimations(selector = '[data-animate]', options = {}) {
  const elements = document.querySelectorAll(selector);
  if (elements.length === 0) return;

  const defaultOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px',
    ...options,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Respect custom delay from data attribute
        const delay = entry.target.dataset.animateDelay;
        if (delay) {
          entry.target.style.transitionDelay = `${delay}ms`;
        }

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, defaultOptions);

  elements.forEach((el) => observer.observe(el));
}

/**
 * Initialize counter animations for elements with [data-count].
 * Animates from 0 to the target number on scroll.
 */
export function initCounterAnimations() {
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

/**
 * Animates a single counter element from 0 to its target value.
 * @param {HTMLElement} element - Element with data-count attribute
 */
function animateCounter(element) {
  const target = parseInt(element.dataset.count, 10);
  const duration = 2000; // ms
  const startTime = performance.now();

  function updateCount(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease-out cubic for smooth deceleration
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);

    element.textContent = current.toLocaleString('pt-PT');

    if (progress < 1) {
      requestAnimationFrame(updateCount);
    } else {
      element.textContent = target.toLocaleString('pt-PT');
    }
  }

  requestAnimationFrame(updateCount);
}
