import { TimelineMax, TweenMax } from 'gsap';
import ScrollAnim from '../modules/dev/animation/scrollAnim';

class InNumbers {
  constructor () {
    this.$block = $('.in-numbers');
    this.$title = this.$block.find('.in-numbers__title');
    this.$item = this.$block.find('.in-numbers__item');

    if (this.$block.length) this.init();
  }

  init() {
    this.scrollAnim();
  }

  scrollAnim() {
    const _this = this;

    this.$item.each((i, item) => {
      new ScrollAnim({
        el: item,
        onEnter() {
          _this.itemsAnim(item);
        }
      });
    });
  }

  itemsAnim(item) {
    const tl = new TimelineMax();
    const $item = $(item);
    const $backNumb = $item.find('.in-numbers__item-back-numb');
    const $numb = $item.find('.in-numbers__item-numb');
    const $numbText = $numb.find('span');
    const $text = $item.find('.in-numbers__item-text');

    tl
      .to(this.$title, .5, { autoAlpha: 1, y: 0, ease: Power2.easeOut })
      .to($numb, 1, { autoAlpha: 1, rotation: 0, ease: Power2.easeOut })
      .to($numbText, .5, { autoAlpha: 1, scale: 1, ease: Power1.easeOut }, '-=.3')
      .to($backNumb, 1, { autoAlpha: 1, y: 0, ease: Power1.easeOut }, 'text')
      .to($text, 1, { autoAlpha: 1, y: 0, ease: Power1.easeOut }, 'text');
  }
}

export const InNumbersAPI = new InNumbers();
