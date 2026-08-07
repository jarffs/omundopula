/**
 * Navigation Module
 * Handles sticky header, smooth scroll, active section highlighting,
 * mobile menu, and back-to-top button.
 */

/** @type {HTMLElement} */
let header;
/** @type {HTMLElement} */
let mobileMenu;
/** @type {HTMLElement} */
let mobileToggle;
/** @type {HTMLElement} */
let backToTop;
/** @type {NodeListOf<HTMLElement>} */
let navLinks;
/** @type {HTMLElement[]} */
let sections;

/**
 * Initialize the navigation module.
 */
export function initNavigation() {
  header = document.querySelector('.header');
  mobileMenu = document.querySelector('.mobile-menu');
  mobileToggle = document.querySelector('.mobile-toggle');
  backToTop = document.querySelector('.back-to-top');
  navLinks = document.querySelectorAll('.nav__link, .mobile-menu__link');
  sections = Array.from(document.querySelectorAll('section[id]'));

  if (!header) return;

  setupStickyHeader();
  setupSmoothScroll();
  setupActiveSectionHighlight();
  setupMobileMenu();
  setupBackToTop();
}

/**
 * Adds/removes `is-scrolled` class on the header based on scroll position.
 */
function setupStickyHeader() {
  const onScroll = () => {
    const scrolled = window.scrollY > 50;
    header.classList.toggle('is-scrolled', scrolled);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // Check initial state
}

/**
 * Smooth scroll to anchor targets for all navigation links.
 */
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const headerHeight = header.offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });

      // Close mobile menu if open
      closeMobileMenu();
    });
  });
}

/**
 * Highlights the active nav link based on which section is currently in view.
 */
function setupActiveSectionHighlight() {
  if (sections.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveLink(id);
        }
      });
    },
    {
      rootMargin: '-40% 0px -60% 0px',
    }
  );

  sections.forEach((section) => observer.observe(section));
}

/**
 * Sets the active class on the matching nav link.
 * @param {string} sectionId - The section ID to activate
 */
function setActiveLink(sectionId) {
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    link.classList.toggle('is-active', href === `#${sectionId}`);
  });
}

/**
 * Sets up the mobile hamburger menu toggle.
 */
function setupMobileMenu() {
  if (!mobileToggle || !mobileMenu) return;

  mobileToggle.addEventListener('click', toggleMobileMenu);

  // Close on overlay click
  mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
      closeMobileMenu();
    }
  });

  // Close button inside panel
  const closeBtn = mobileMenu.querySelector('.mobile-menu__close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeMobileMenu);
  }

  // Close on ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
      closeMobileMenu();
    }
  });
}

function toggleMobileMenu() {
  const isOpen = mobileMenu.classList.contains('is-open');
  if (isOpen) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

function openMobileMenu() {
  mobileMenu.classList.add('is-open');
  mobileToggle.classList.add('is-active');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  if (!mobileMenu) return;
  mobileMenu.classList.remove('is-open');
  if (mobileToggle) mobileToggle.classList.remove('is-active');
  document.body.style.overflow = '';
}

/**
 * Sets up the back-to-top button with scroll progress.
 */
function setupBackToTop() {
  if (!backToTop) return;

  const progressCircle = backToTop.querySelector('.back-to-top__progress circle');

  const onScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = scrollTop / docHeight;

    // Show/hide button
    backToTop.classList.toggle('is-visible', scrollTop > 400);

    // Update progress circle
    if (progressCircle) {
      const circumference = 145;
      const offset = circumference - scrollPercent * circumference;
      progressCircle.style.strokeDashoffset = offset;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
