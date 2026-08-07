/**
 * Forms Module
 * Client-side validation and submission for the contact form.
 */

/**
 * Initialize form handling.
 */
export function initForms() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', handleFormSubmit);

  // Real-time validation
  const inputs = contactForm.querySelectorAll('.contact__input, .contact__textarea');
  inputs.forEach((input) => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('is-invalid')) {
        validateField(input);
      }
    });
  });
}

/**
 * Handle form submission.
 * @param {SubmitEvent} e
 */
async function handleFormSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const messageEl = form.querySelector('.form-message');

  // Validate all fields
  const inputs = form.querySelectorAll('.contact__input, .contact__textarea');
  let isValid = true;

  inputs.forEach((input) => {
    if (!validateField(input)) {
      isValid = false;
    }
  });

  if (!isValid) return;

  // Show loading state
  const submitBtn = form.querySelector('.btn');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'A enviar...';
  submitBtn.disabled = true;

  try {
    // For now, simulate sending (replace with actual endpoint)
    await simulateSend(formData);

    showMessage(messageEl, 'success', 'Mensagem enviada com sucesso! Entraremos em contacto em breve.');
    form.reset();
  } catch (error) {
    showMessage(messageEl, 'error', 'Ocorreu um erro ao enviar. Por favor, tente novamente.');
  } finally {
    submitBtn.textContent = originalText;
    submitBtn.disabled = false;
  }
}

/**
 * Validate a single form field.
 * @param {HTMLInputElement|HTMLTextAreaElement} field
 * @returns {boolean}
 */
function validateField(field) {
  const value = field.value.trim();
  const name = field.name;
  let isValid = true;
  let errorMessage = '';

  // Required check
  if (field.required && !value) {
    isValid = false;
    errorMessage = 'Este campo é obrigatório.';
  }

  // Email format check
  if (isValid && name === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      isValid = false;
      errorMessage = 'Por favor, insira um email válido.';
    }
  }

  // Phone format check
  if (isValid && name === 'phone' && value) {
    const phoneRegex = /^[\d\s+()-]{9,}$/;
    if (!phoneRegex.test(value)) {
      isValid = false;
      errorMessage = 'Por favor, insira um telefone válido.';
    }
  }

  // Update UI
  field.classList.toggle('is-invalid', !isValid);
  
  // Show/hide error message
  let errorEl = field.parentElement.querySelector('.field-error');
  if (!isValid) {
    if (!errorEl) {
      errorEl = document.createElement('span');
      errorEl.className = 'field-error';
      errorEl.style.cssText = 'color: var(--color-error); font-size: var(--fs-xs); margin-top: var(--space-2xs); display: block;';
      field.parentElement.appendChild(errorEl);
    }
    errorEl.textContent = errorMessage;
  } else if (errorEl) {
    errorEl.remove();
  }

  return isValid;
}

/**
 * Show a success/error message below the form.
 * @param {HTMLElement} el - Message container
 * @param {'success'|'error'} type
 * @param {string} text
 */
function showMessage(el, type, text) {
  if (!el) return;

  el.className = `form-message form-message--${type} is-visible`;
  el.textContent = text;

  // Auto-hide after 8 seconds
  setTimeout(() => {
    el.classList.remove('is-visible');
  }, 8000);
}

/**
 * Simulate form submission (replace with real endpoint).
 * @param {FormData} data
 * @returns {Promise<void>}
 */
function simulateSend(data) {
  return new Promise((resolve) => {
    setTimeout(resolve, 1500);
  });
}
