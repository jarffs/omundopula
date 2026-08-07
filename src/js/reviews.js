/**
 * Reviews Module
 * Carousel navigation for the Google Reviews section.
 */

/** @type {HTMLElement|null} */
let track = null;
/** @type {number} */
let reviewIndex = 0;
/** @type {number} */
let totalPages = 0;

/**
 * Initialize the reviews carousel.
 */
export function initReviews() {
  const slider = document.querySelector('.reviews__slider');
  if (!slider) return;

  track = slider.querySelector('.reviews__track');
  const slides = track ? track.querySelectorAll('.reviews__slide') : [];
  totalPages = slides.length;

  if (totalPages <= 1) return;

  const prevBtn = document.querySelector('.reviews__nav-btn--prev');
  const nextBtn = document.querySelector('.reviews__nav-btn--next');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => goToReview(reviewIndex - 1));
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => goToReview(reviewIndex + 1));
  }

  goToReview(0);
}

/**
 * Navigate to a specific review page.
 * @param {number} index - Target page index
 */
function goToReview(index) {
  if (!track || totalPages === 0) return;

  // Wrap around
  if (index < 0) index = totalPages - 1;
  if (index >= totalPages) index = 0;

  reviewIndex = index;
  const offset = -(index * 100);
  track.style.transform = `translateX(${offset}%)`;
}
