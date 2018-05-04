import { TimelineMax } from 'gsap';
import ScrollAnim from '../modules/dev/animation/scrollAnim';

class Stages {
  constructor (el) {
    this.$block = $(el);
    this.$title = this.$block.find('.stages__title');
    this.$item = this.$block.find('.c-tabs__tab').first().find('.stages__item');
    this.$tabBtn = this.$block.find('.stages__tabs').find('.c-tabs__btn');
    this.$resultBtn = this.$block.find('.stages__result-btn');
    this.tl = new TimelineMax();

    if (this.$block.length) this.init();
  }

  init() {
    const _this = this;

    new ScrollAnim({
      el: this.$block.get(0),
      hook: .85,
      onEnter: () => {
        _this.startAnim();
      }
    });

    this.$item.each((i, item) => {
      new ScrollAnim({
        el: item,
        onEnter: () => {
          _this.itemsAnim(item);
        }
      });
    });
  }

  startAnim() {
    this.tl
      .to(this.$title, .5, { autoAlpha: 1, y: 0 })
      .to(this.$tabBtn, .5, { autoAlpha: 1, x: 0 });
  }

  itemsAnim(item) {
    TweenMax
      .to(item, .7, { autoAlpha: 1, x: 0 });
  }
}

$('.stages').each((i, el) => {
  new Stages(el);
});
