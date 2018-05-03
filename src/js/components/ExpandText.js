import { TimelineMax } from 'gsap';
import { css, $window} from '../modules/dev/_helpers';
import ScrollAnim from '../modules/dev/animation/scrollAnim';

class ExpandText {
  constructor (el) {
    this.$block = el;
    this.$content = this.$block.find('.expand-text__content');
    this.$btn = this.$block.find('.expand-text__btn');
    this.$contentHeight = this.$content.outerHeight();

    if (this.$block.length) this.init();
  }

  init() {
    this.toggle();
  }

  toggle() {
    this.$btn.on('click tap', () => {

      if (this.$content.hasClass(css.active)) {
        TweenLite.to(this.$content, .3, { height: this.$contentHeight });
        this.$content.removeClass(css.active);
      } else {
        TweenLite.set(this.$content, { height: 'auto' });
        TweenLite.from(this.$content, .3, { height: this.$contentHeight });
        this.$content.addClass(css.active);
      }

      setTimeout(() => {
        $window.trigger('resize.px.parallax');
      }, 310);
    });
  }
}

/** list init */
const $expandList = $('.expand-text');
$expandList.each((index, el) => {
  new ExpandText($(el));
});
