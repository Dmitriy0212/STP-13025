import Swiper from 'swiper';
import { Navigation, Keyboard, Grid } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
const base = import.meta.env.BASE_URL;
const slidesData = [
  {
    name: 'Sarah Mitchell',
    publicationdate: 'March 12, 2026',
    rating: 5,
    publication: `Honestly one of the most satisfying puzzle games I've played. The 3D objects feel real, the animations when you match three are genuinely delightful.`,
  },
  {
    name: 'James Robertson',
    publicationdate: 'April 3, 2025',
    rating: 5,
    publication: `The soft lighting and colours are so easy on the eyes. Great for winding down before bed.`,
  },
  {
    name: 'Laura Chen',
    publicationdate: 'January 19, 2024',
    rating: 4,
    publication: `Fun game but pieces are too small on older phones. Would love a size option.`,
  },
  {
    name: 'Daniel Petrov',
    publicationdate: 'February 28, 2026',
    rating: 5,
    publication: `My kids and I play together every evening. The candy and toy themes keep them hooked, and I love how clean the UI is.`,
  },
  {
    name: 'Amanda Wilson',
    publicationdate: 'April 6, 2025',
    rating: 4,
    publication: `The glowing particle effects when you complete a level — absolutely stunning. Amazing game!`,
  },
  {
    name: `Michael O'Brien`,
    publicationdate: 'March 1, 2024',
    rating: 3,
    publication: `Solid puzzle game. Would appreciate a social sharing feature — I want to show off my scores.`,
  },
];
export async function initReviewsSwiper() {
  const sliderWrapper = document.querySelector('#reviews__wrapper');
  if (!sliderWrapper) {
    console.error('sliderWrapper не знайдено!');
    return;
  }

  sliderWrapper.innerHTML = a(slidesData);
  const images = document.querySelectorAll('.slider__image');

  sliderWrapper.addEventListener('click', e => {
    const btn = e.target.closest('.furnitures-item__btn');
    if (!btn) return;
    const id = btn.dataset.id;
    productmodalRender(id);
  });

  const swiper = new Swiper('.reviews-slider', {
    modules: [Navigation, Keyboard, Grid],

    slidesPerView: 1,
    spaceBetween: 24,
    slidesPerGroup: 1,

    grid: {
      rows: 3,
      fill: 'row',
    },

    navigation: {
      nextEl: '.review-pagination-next',
      prevEl: '.review-pagination-prev',
    },

    keyboard: {
      enabled: true,
    },

    on: {
      init() {
        clickUpdateButtons(this);
      },
      slideChange() {
        clickUpdateButtons(this);
      },
    },

    breakpoints: {
      1440: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        spaceBetween: 24,
        grid: {
          rows: 3,
          fill: 'row',
        },
      },
    },
  });
}

function clickUpdateButtons(swiper) {
  const prevBtn = document.querySelector('.review-pagination-prev');
  const nextBtn = document.querySelector('.review-pagination-next');
  prevBtn.disabled = swiper.isBeginning;
  nextBtn.disabled = swiper.isEnd;
}

function a(slidesData) {
  return slidesData
    .map(slide => {
      return `
      <li class="swiper-slide">
 <div class="review__slide" >
  <div class="review-item">
    <div class="review-icon">
     <svg viewBox="0 0 32 32" width= "18"  height="18">
              <use href="./img/sprite.svg#icon-bi_people-fill"></use>
            </svg>
    </div>
    <div class="review-block">
      <p class="review-text">${slide.name}</p>
      <p class="review-text">${slide.publicationdate}</p>
    </div>
  </div>
  <div class="rating-rate" data-rating="${slide.rating}"></div>
  <p class="review-text">${slide.publication}</p>
 </div>
</li>
`;
    })
    .join('');
}
