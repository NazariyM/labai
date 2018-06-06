import { $window, css, Resp, $scrolledElements, $header } from '../modules/dev/_helpers';

class Steps {
  constructor (el) {
    this.$block = el;
    this.$btn = this.$block.find('.steps__nav-item');
    this.$content = this.$block.find('.steps__box');

    if (this.$block.length) this.init();
  }

  init() {
    this.bindEvents();
  }

  initToggle() {
    const _this = this;

    this.$btn.on('click', function () {
      const $this = $(this);
      const $index = $this.index();

      $this.addClass(css.active);
      $this.siblings().removeClass(css.active);
      _this.$content.slideUp().removeClass(css.active);
      _this.$content.eq($index).slideDown(function () {
        if (!Resp.isDesk) _this.scrollToContent();
      }).addClass(css.active);

      // parallax fix
      setTimeout(() => {
        $window.trigger('resize.px.parallax');
      }, 1000);
    });

    this.$content.first().show();
  }

  scrollToContent() {
    const $headerHeight = $header.outerHeight();
    const $content = this.$block.find('.steps__box.is-active');
    const $scrollDist = $content.offset().top - $headerHeight - 30;

    $scrolledElements.animate({ scrollTop: $scrollDist }, 500);
  }

  bindEvents() {
    this.initToggle();
  }
}

const $steps = $('.steps');
$steps.each((index, el) => {
  new Steps($(el));
});
