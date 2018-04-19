import { TimelineMax, TweenMax } from 'gsap';
import ScrollAnim from '../modules/dev/animation/scrollAnim';

class Anims {
  constructor () {
    this.fadeYitem = [...document.querySelectorAll('[data-anim="fade-y"]')];
    this.fadeXitem = [...document.querySelectorAll('[data-anim="fade-x"]')];
    this.staggerY = [...document.querySelectorAll('[data-anim-stagger="fade-y"]')];
    this.staggerX = [...document.querySelectorAll('[data-anim-stagger="fade-x"]')];

    this.init();
  }

  init() {
    this.scrollAnim();
  }

  scrollAnim() {
    const _this = this;

    for (const item of this.fadeYitem) {
      new ScrollAnim({
        el: item,
        onEnter() {
          _this.fadeYAnim(item);
        }
      });
    }

    for (const item of this.fadeXitem) {
      new ScrollAnim({
        el: item,
        onEnter() {
          _this.fadeXAnim(item);
        }
      });
    }

    for (const item of this.staggerY) {
      new ScrollAnim({
        el: item,
        hook: .75,
        onEnter() {
          _this.staggerYAnim(item);
        }
      });
    }

    for (const item of this.staggerX) {
      new ScrollAnim({
        el: item,
        hook: .75,
        onEnter() {
          _this.staggerXAnim(item);
        }
      });
    }
  }

  fadeYAnim(item) {
    const duration = item.getAttribute('data-anim-duration') || 0.5;
    const delay = item.getAttribute('data-anim-delay') || 0;

    TweenMax.to(item, duration, { autoAlpha: 1, y: 0, ease: Power2.easeOut, delay: delay });
  }

  fadeXAnim(item) {
    const duration = item.getAttribute('data-anim-duration') || 0.5;
    const delay = item.getAttribute('data-anim-delay') || 0;

    TweenMax.to(item, duration, { autoAlpha: 1, x: 0, ease: Power2.easeOut, delay: delay });
  }

  staggerYAnim(item) {
    const tl = new TimelineMax();
    const animItems = item.children;
    const duration = item.getAttribute('data-anim-duration') || 0.5;
    const staggerDelay = item.getAttribute('data-stagger-delay') || 0.3;

    tl.staggerTo(animItems, duration, { autoAlpha: 1, y: 0, ease: Power2.easeOut }, staggerDelay);
  }

  staggerXAnim(item) {
    const tl = new TimelineMax();
    const animItems = item.children;
    const duration = item.getAttribute('data-anim-duration') || 0.5;
    const staggerDelay = item.getAttribute('data-stagger-delay') || 0.3;

    tl.staggerTo(animItems, duration, { autoAlpha: 1, x: 0, ease: Power2.easeOut }, staggerDelay);
  }
}

export const AnimsAPI = new Anims();
