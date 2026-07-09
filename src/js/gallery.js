import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/keyboard';
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
export async function initSwiper() {
  const sliderWrapper = document.querySelector('[data-gallery-swiper-wrapper]');
  if (!sliderWrapper) {
    console.error('sliderWrapper не знайдено!');
    return;
  }

  sliderWrapper.innerHTML = a(slidesData);
  const images = document.querySelectorAll('[data-gallery-slider]');

  const swiper = new Swiper('.slider', {
    navigation: {
      nextEl: '[data-gallery-swiper-next]',
      prevEl: '[data-gallery-swiper-prev]',
    },
    keyboard: true,

    on: {
      init() {
        clickUpdateButtons(this);
      },
      slideChange() {
        clickUpdateButtons(this);
      },
    },

    breakpoints: {
      300: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 0 },

      1440: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 24 },
    },
  });
}

function clickUpdateButtons(swiper) {
  const prevBtn = document.querySelector('[data-gallery-swiper-prev]');
  const nextBtn = document.querySelector('[data-gallery-swiper-next]');
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
      data-gallery-slider
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
