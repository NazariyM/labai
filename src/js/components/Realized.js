import { css } from '../modules/dev/_helpers';

class Realized {
  constructor() {
    this.$block = $('.realized');
    this.$item  = this.$block.find('.realized__item');

    if (this.$block.length) this.init();
  }

  init() {
    this.toggleImg();
  }

  toggleImg() {

    this.$item.each(function (i, item) {
      const $img = $(item).find('.realized__images-item');
      const $btn = $(item).find('.realized__actions-btn');

      $btn.on('click', function () {
        const $this = $(this);
        const $index = $this.index();

        $this.siblings().removeClass(css.active);
        $this.addClass(css.active);
        $img.removeClass(css.active);
        $img.eq($index).addClass(css.active);
      });
    });
  }
}

export const RealizedAPI = new Realized();
