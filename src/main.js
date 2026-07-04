import { initSwiper } from './js/gallery.js';
import { initReviewsSwiper } from './js/reviews.js';

function init() {
  document.addEventListener('DOMContentLoaded', async () => {
    await initSwiper();
    await initReviewsSwiper();
  });
}
init();
