import Swiper from 'swiper';
import { Navigation, Keyboard, Grid } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
const base = import.meta.env.BASE_URL;
const slidesData = [
  {
    urldesc: `${base}img/webp/desc/card1.png`,
    urldescx2: `${base}img/webp/desc/card1@x2.png`,
    urlmob: `${base}img/webp/mobile/card1.png`,
    urlmobx2: `${base}img/webp/mobile/card1@2x.png`,
    desc: 'Floating collections of colorful 3D objects',
  },
  {
    urldesc: `${base}img/webp/desc/card2.png`,
    urldescx2: `${base}img/webp/desc/card2@x2.png`,
    urlmob: `${base}img/webp/mobile/card2.png`,
    urlmobx2: `${base}img/webp/mobile/card2@2x.png`,
    desc: 'Dynamic triple-match animations with glowing particles',
  },
  {
    urldesc: `${base}img/webp/desc/card3.png`,
    urldescx2: `${base}img/webp/desc/card3@x2.png`,
    urlmob: `${base}img/webp/mobile/card3.png`,
    urlmobx2: `${base}img/webp/mobile/card3@2x.png`,
    desc: 'Casual mobile UI with modern gradients',
  },
  {
    urldesc: `${base}img/webp/desc/card4.png`,
    urldescx2: `${base}img/webp/desc/card4@x2.png`,
    urlmob: `${base}img/webp/mobile/card4.png`,
    urlmobx2: `${base}img/webp/mobile/card4@2x.png`,
    desc: 'Organized puzzle spaces before and after completion',
  },
  {
    urldesc: `${base}img/webp/desc/card5.png`,
    urldescx2: `${base}img/webp/desc/card5@x2.png`,
    urlmob: `${base}img/webp/mobile/card5.png`,
    urlmobx2: `${base}img/webp/mobile/card5@2x.png`,
    desc: 'Bright toy, candy, and fruit object collections',
  },
  {
    urldesc: `${base}img/webp/desc/card6.png`,
    urldescx2: `${base}img/webp/desc/card6@x2.png`,
    urlmob: `${base}img/webp/mobile/card6.png`,
    urlmobx2: `${base}img/webp/mobile/card6@2x.png`,
    desc: 'Relaxing puzzle environments with soft lighting',
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
    spaceBetween: 0,
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
<li class="slider__slide swiper-slide">
  <div class="slider__img-wrapper gallery-img">
    <picture>
      <!-- mobile -->
      <source
        media="(max-width: 767px)"
        srcset="${slide.urlmob} 1x, ${slide.urlmobx2} 2x"
      />

      <!-- desktop -->
      <source
        media="(min-width: 768px)"
        srcset="${slide.urldesc} 1x, ${slide.urldescx2} 2x"
      />

      <img
        class="slider__image"
        src="${slide.urldesc}"
        srcset="${slide.urldescx2} 2x"
        alt="${(slide.desc || '').replace(/"/g, '').trim()}"
      />
    </picture>
  </div>

  <p class="slider__desc">${slide.desc}</p>
</li>`;
    })
    .join('');
}
