import * as allFunctions from './modules/functions.js';
// import swiperHey from './modules/swiper.js';

allFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiperArticles = new Swiper('.articles-swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
});

const swiperResearches = new Swiper('.researches-swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
});
