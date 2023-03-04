import twitterIcon from './img/twitter.svg';
import facebookIcon from './img/facebook.svg';
import instagramIcon from './img/instagram.svg';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
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
