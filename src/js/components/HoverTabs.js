class HoverTabs {
  constructor (el) {
    this.$block = el;
    this.$item = this.$block.find('.hover-tabs__item');
    this.$btn = this.$block.find('.hover-tabs__actions-btn');

    if (this.$block.length) this.init();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    const _this = this;

    this.$btn.on('mouseenter', function () {
      const $index = $(this).index();

      _this.$item.siblings().fadeOut();
      _this.$item.eq($index).fadeIn();
      _this.$btn.siblings().removeClass('is-active');
    });

    this.$btn.on('mouseleave', function () {
      const $index = $(this).index();

      _this.$item.eq($index).fadeOut();
      _this.$btn.first().addClass('is-active');
    });
  }

}

/** tabs init */
const $tabs = $('.hover-tabs');
$tabs.each((index, el) => {
  new HoverTabs($(el));
});

