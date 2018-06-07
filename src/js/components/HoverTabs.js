import { css } from '../modules/dev/_helpers';

class HoverTabs {
  constructor (el) {
    this.$block = el;
    this.$item = this.$block.find('.hover-tabs__item');
    this.$btn = this.$block.find('.hover-tabs__actions-btn');

    if (this.$block.length) this.init();
  }

  init() {
    this.initHover();
  }

  initHover() {
    const _this = this;

    this.$btn.on('mouseenter', function (e) {
      const $this = $(this);
      const $index = $this.index();

      _this.$item.eq($index).addClass(css.active);
      _this.$btn.siblings().removeClass(css.active);
      _this.$item.siblings().removeClass(css.active);
      _this.$item.eq($index).addClass(css.active);
      $this.addClass(css.active);
    });

    this.$btn.on('mouseleave', function () {
      const $index = $(this).index();

      _this.$item.eq($index).addClass(css.active).removeAttr('style');
    });

    _this.$item.first().addClass(css.active);
    _this.$btn.first().addClass(css.active);
  }

}

/** tabs init */
const $tabs = $('.hover-tabs');
$tabs.each((index, el) => {
  new HoverTabs($(el));
});
