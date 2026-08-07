/**
 * Main Entry Point
 * Imports and initializes all modules.
 */

// ── CSS Imports ──
import '../css/variables.css';
import '../css/base.css';
import '../css/components.css';
import '../css/sections.css';
import '../css/animations.css';
import '../css/responsive.css';

// ── Module Imports ──
import { initNavigation } from './navigation.js';
import { initScrollAnimations, initCounterAnimations } from './animations.js';
import { initSlider } from './slider.js';
import { initReviews } from './reviews.js';
import { initForms } from './forms.js';

/**
 * Initialize all site modules when DOM is ready.
 */
function init() {
  // Remove preloader
  const preloader = document.querySelector('.preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        preloader.classList.add('is-loaded');
      }, 500);
    });
  }

  // Initialize modules
  initNavigation();
  initScrollAnimations();
  initCounterAnimations();
  initSlider();
  initReviews();
  initForms();

  // Set current year in footer
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
