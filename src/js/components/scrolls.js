import { $scrolledElements } from '../modules/dev/_helpers';

$('.js-scroll-to').on('click tap', function () {
  $scrolledElements.animate({
    scrollTop: $('#scroll-here').offset().top
  }, 2000);
  return false;
});

$('.anim-mouse').on('click tap', function () {
  const navHeight = $('.header__nav').outerHeight();
  const $section = $(this).closest('section').next().offset().top - navHeight;

  $scrolledElements.animate({ scrollTop: $section }, 500);
});
