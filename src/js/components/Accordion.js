import { TweenMax, CSSPlugin } from 'gsap';
import { $window, css, Resp } from '../modules/dev/_helpers';

class Accordion {
  constructor(el, enableFix = false, speed = 0.3) {
    this.$block = el;
    this.$item = this.$block.find('.accordion__item');
    this.$btn = this.$block.find('.accordion__btn');
    this.$content = this.$block.find('.accordion__content');
    this.speed = speed;
    this.totalContentHeight = [];
    this.enableFix = enableFix;

    if (this.$block.length) this.init();
  }

  init() {
    this.countContentHeight();
    this.initToggle();
    // if (this.enableFix && Resp.isDesk) this.parallaxFix();
  }

  initToggle() {
    const _this = this;

    TweenMax.set(this.$content, { height: 0 });

    this.$btn.on('click tap', function () {

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

      // parallax fix
      setTimeout(() => {
        $window.trigger('resize.px.parallax');
      }, 300);
    });

    function showContent(el) {
      TweenMax.set(el, { height: 'auto' });
      TweenMax.from(el, _this.speed, { height: 0 });
    }

    function hideContent(el) {
      TweenMax.to(el, _this.speed, { height: 0 });
    }
  }

  parallaxFix() {
    const _this = this;

    const $section = this.$content.closest('section');
    const $sectionHeight = $section.outerHeight();
    const highestContent = Math.max.apply(null, _this.totalContentHeight);

    TweenMax.set($section, { height: $sectionHeight + highestContent + 80 });
  }

  countContentHeight() {
    this.$content.each((i, el) => {
      this.totalContentHeight.push($(el).outerHeight());
    });
  }

}

/** default init */
const $accordion = $('.js-accordion');
$accordion.each((index, el) => {
  new Accordion($(el));
});

/** faq init */
const $faqAccordion = $('.faq__accordion');
$faqAccordion.each((index, el) => {
  new Accordion($(el), true);
});
