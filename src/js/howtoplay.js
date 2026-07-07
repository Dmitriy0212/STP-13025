import Swiper from 'swiper';
import { Navigation, Keyboard, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';

export async function initHowToPlaySwiper() {
  const swiper = new Swiper('.how-to-play-swiper', {
    modules: [Navigation, Keyboard, Grid],

    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 32,
    grid: {
      rows: 2,
      fill: 'row',
    },

    navigation: {
      prevEl: '.how-to-play-pagination-prev',
      nextEl: '.how-to-play-pagination-next',
    },

    keyboard: { enabled: true },

    breakpoints: {
      1440: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 24,
      },
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
  });
}
