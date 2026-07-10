const faqItems = document.querySelectorAll('[data-faqs-item]');
faqItems.forEach(input => {
  input.addEventListener('change', () => {
    if (input.checked) {
      // тільки одна комірка
      faqItems.forEach(other => {
        if (other !== input) {
          other.checked = false;
        }
      });
    }
  });
});
