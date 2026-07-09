const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const burgerMenuEl = document.querySelector('[data-visible]');
const headerScrolOn = document.querySelector('[data-menu]');

openBtnEl.addEventListener('click', e => {
  if (document.body.style.overflow !== 'hidden') {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
  burgerMenuEl.dataset.visible = 'open';
});

closeBtnEl.addEventListener('click', e => {
  if (document.body.style.overflow !== 'hidden') {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
  burgerMenuEl.dataset.visible = 'close';

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });
});
for (const item of headerScrolOn.children) {
  const link = item.querySelector('a');
  if (link)
    link.addEventListener('click', e => {
      burgerMenuEl.dataset.visible = 'close';
      document.body.style.overflow = '';
    });
}
