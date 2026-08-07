/**
 * Slider Module
 * Lightweight hero carousel with auto-play, fade transitions, and dot navigation.
 */

/** @type {HTMLElement[]} */
let slides = [];
/** @type {HTMLElement[]} */
let dots = [];
/** @type {number} */
let currentIndex = 0;
/** @type {number|null} */
let autoPlayTimer = null;

const AUTO_PLAY_INTERVAL = 6000; // ms

/**
 * Initialize the hero slider.
 * @param {string} containerSelector - Selector for the slider container
 */
export function initSlider(containerSelector = '.hero__slider') {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  slides = Array.from(container.querySelectorAll('.hero__slide'));
  dots = Array.from(document.querySelectorAll('.hero__dot'));

  if (slides.length <= 1) {
    // Single slide — just show it
    if (slides[0]) slides[0].classList.add('is-active');
    return;
  }

  // Set initial slide
  goToSlide(0);

  // Dot navigation
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
      restartAutoPlay();
    });
  });

  // Auto-play
  startAutoPlay();

  // Pause on hover
  container.addEventListener('mouseenter', stopAutoPlay);
  container.addEventListener('mouseleave', startAutoPlay);

  // Pause when page is hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  });
}

/**
 * Navigate to a specific slide.
 * @param {number} index - Target slide index
 */
function goToSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('is-active', i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('is-active', i === index);
  });

  currentIndex = index;
}

/**
 * Advance to the next slide, wrapping around.
 */
function nextSlide() {
  const next = (currentIndex + 1) % slides.length;
  goToSlide(next);
}

function startAutoPlay() {
  stopAutoPlay();
  autoPlayTimer = setInterval(nextSlide, AUTO_PLAY_INTERVAL);
}

function stopAutoPlay() {
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
  }
}

function restartAutoPlay() {
  stopAutoPlay();
  startAutoPlay();
}
