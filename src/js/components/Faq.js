import { TweenMax, CSSPlugin } from 'gsap';
import { css } from '../modules/dev/_helpers';

export class Faq {
  constructor(el) {
    this.$block = el;
    this.$item = this.$block.find('.faq__item');
    this.$btn = this.$block.find('.faq__question');
    this.$content = this.$block.find('.faq__answer');
    this.speed = 0.3;

    if (this.$block.length) this.init();
  }

  initFaq() {
    const _this = this;

    this.$btn.on('click', function () {
      let $selfItem = $(this).closest(_this.$item);
      let $selftContent = $selfItem.find(_this.$content);

      _this.$item.not($selfItem).removeClass(css.active);
      _this.$content.each(function () {
        if (!$(this).closest($selfItem).length) {
          hideContent($(this));
        }
      });
      $selfItem.toggleClass(css.active);

      if ($selfItem.hasClass(css.active)) {
        showContent($selftContent);
      } else {
        hideContent($selftContent);
      }
    });

    function showContent(el) {
      TweenMax.set(el, { height: 'auto' });
      TweenMax.from(el, _this.speed, { height: 0 });
    }

    function hideContent(el) {
      TweenMax.to(el, _this.speed, { height: 0 });
    }
  }

  init() {
    this.initFaq();
  }

}

/** tabs init */
const $faq = $('.faq');
$faq.each((index, el) => {
  new Faq($(el));
});

