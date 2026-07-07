import Swiper from 'swiper';
import { Navigation, Keyboard, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';

export async function initHowToPlaySwiper() {
  const swiper = new Swiper('.how-to-play-swiper', {
    modules: [Navigation, Keyboard, Grid],

    /*  slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    grid: {
      rows: 3,
      fill: 'row',
    },
*/
    navigation: {
      prevEl: '.how-to-play-pagination-prev',
      nextEl: '.how-to-play-pagination-next',
    },

    keyboard: { enabled: true },

    on: {
      init() {
        clickUpdateButtons(this);
      },
      slideChange() {
        clickUpdateButtons(this);
      },
    },

    breakpoints: {
      300: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 24,
        grid: {
          rows: 3,
          fill: 'row',
        },
      },

      1440: {
        slidesPerView: 3,
        slidesPerGroup: 3,
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
  const prevBtn = document.querySelector('.how-to-play-pagination-prev');
  const nextBtn = document.querySelector('.how-to-play-pagination-next');
  prevBtn.disabled = swiper.isBeginning;
  nextBtn.disabled = swiper.isEnd;
}
