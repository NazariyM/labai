import { css } from '../modules/dev/_helpers';
import ScrollAnim from '../modules/dev/animation/scrollAnim';
import { TweenMax, TimelineMax } from 'gsap';
import $ from 'jquery';
import 'slick-carousel';

class Slider {

  constructor () {
    this.$slider = $('.slider');
    this.$mobSlider = $('.mob-slider');

    this.arrLeft = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="43" viewBox="0 0 25 43">
    <defs>
        <path id="i6tca"
              d="M196.72 2737l17.95-18.07c.44-.44.44-1.15 0-1.6a1.12 1.12 0 0 0-1.6 0l-18.74 18.87a1.13 1.13 0 0 0 0 1.6l18.75 18.86a1.1 1.1 0 0 0 1.58 0c.44-.44.44-1.15 0-1.6z"/>
    </defs>
    <g>
        <g transform="translate(-192 -2715)">
            <use xlink:href="#i6tca"/>
        </g>
    </g>
</svg>`;
    this.arrRight = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="43" viewBox="0 0 25 43">
        <defs>
            <path id="vmhva"
                  d="M1403.28 2737l-17.92-18.07a1.13 1.13 0 0 1 0-1.6 1.11 1.11 0 0 1 1.59 0l18.72 18.87c.44.45.44 1.16 0 1.6l-18.72 18.86a1.1 1.1 0 0 1-1.58 0 1.13 1.13 0 0 1 0-1.6z"/>
        </defs>
        <g>
            <g transform="translate(-1383 -2715)">
                <use xlink:href="#vmhva"/>
            </g>
        </g>
    </svg>`;

    this.init();
  }

  init () {
    this.createSlider();
    this.createMobileSlider();
    this.screenSlider();
  }

  screenSlider() {
    this.$screenSldFor = $('.screen__slider-for');
    this.$screenSldNav = $('.screen__slider-nav');

    const arrLeft = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="35" height="95"
     viewBox="0 0 35 95">
    <defs>
        <path id="62cia" d="M215.15 395l-30.16 45 30.16 46"/>
        <clipPath id="62cib">
            <use fill="#fff" xlink:href="#62cia"/>
        </clipPath>
    </defs>
    <g>
        <g transform="translate(-182 -393)">
            <use fill="#fff" fill-opacity="0" stroke="#fff" stroke-miterlimit="50" stroke-width="2"
                 clip-path="url(&quot;#62cib&quot;)" xlink:href="#62cia"/>
        </g>
    </g>
    </svg>`;

    const arrRight = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="33" height="94"
     viewBox="0 0 33 94">
    <defs>
        <path id="mieia" d="M1386 394.56l29.82 44.96-29.82 45.95"/>
        <clipPath id="mieib">
            <use fill="#fff" xlink:href="#mieia"/>
        </clipPath>
    </defs>
    <g>
        <g transform="translate(-1384 -393)">
            <use fill="#fff" fill-opacity="0" stroke="#fff" stroke-miterlimit="50" stroke-width="2"
                 clip-path="url(&quot;#mieib&quot;)" xlink:href="#mieia"/>
        </g>
    </g>
  </svg>`;

    this.$screenSldFor.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      asNavFor: '.screen__slider-nav',
      rows: 0,
      accessibility: false,
      infinite: true,
      prevArrow: `<button type="button" class="screen__slider-btn screen__slider-btn_prev">${arrLeft}</button>`,
      nextArrow: `<button type="button" class="screen__slider-btn screen__slider-btn_next">${arrRight}</button>`,
      speed: 700
    });

    this.$screenSldNav.slick({
      vertical: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.screen__slider-for',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      rows: 0,
      accessibility: false,
      infinite: false,
      speed: 700
    });

    this.$screenSldFor.on('init afterChange reInit', (event, slick, currentSlide) => {
      const activeIdx = $('.slick-active').data('slick-index');
      const $screenBg = $('.screen__bg');

      $screenBg.siblings().removeClass(css.active);
      $screenBg.eq(activeIdx).addClass(css.active);
    });

  }

  createMobileSlider() {
    const defaultOptions = {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: false,
      arrows: true,
      speed: 400,
      cssEase: 'cubic-bezier(0.74, 0.1, 0.32, 0.98)',
      useTransform: true,
      adaptiveHeight: true,
      mobileFirst: true,
      accessibility: false,
      rows: 0,
      prevArrow: `<button type="button" class="slider__btn slider__btn_prev">${this.arrLeft}</button>`,
      nextArrow: `<button type="button" class="slider__btn slider__btn_next">${this.arrRight}</button>`
    };

    this.$mobSlider.slick($.extend({}, defaultOptions, {
      responsive: [{
        breakpoint: 1023,
        settings: 'unslick'
      }]
    }));

  }

  createSlider () {

    const defaultOptions = {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      infinite: true,
      arrows: true,
      speed: 800,
      cssEase: 'cubic-bezier(0.74, 0.1, 0.32, 0.98)',
      useTransform: true,
      adaptiveHeight: false,
      accessibility: false,
      swipe: true,
      rows: 0,
      prevArrow: `<button type="button" class="slider__btn slider__btn_prev">${this.arrLeft}</button>`,
      nextArrow: `<button type="button" class="slider__btn slider__btn_next">${this.arrRight}</button>`
    };

    this.$slider.each(function (i, slider) {

      $(slider).slick($.extend({}, defaultOptions, {
        infinite: false,
        adaptiveHeight: true
      }));
    });
  }
}

export const sliderAPI = new Slider();
