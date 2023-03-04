import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './img/twitter.svg';
import './img/facebook.svg';
import './img/instagram.svg';

import './index.scss';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination, Autoplay],
  autoplay: {
    delay: 3000,
  },
  direction: 'vertical',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
