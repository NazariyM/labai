import { TimelineMax, TweenMax } from 'gsap';
import ScrollAnim from '../modules/dev/animation/scrollAnim';

class Projects {
  constructor () {
    this.$block = $('.projects');
    this.$title = this.$block.find('.projects__title');
    this.$descrTitle = this.$block.find('.projects__descr-title');
    this.$titleCount = this.$block.find('.projects__descr-title-count');
    this.$titleCountText = this.$block.find('.projects__descr-title-count').find('span');
    this.$descrText = this.$block.find('.projects__descr-text');

    this.tl = new TimelineMax();

    if (this.$block.length) this.init();
  }

  init() {
    this.scrollAnim();
  }

  scrollAnim() {
    const _this = this;

    new ScrollAnim({
      el: this.$block[0],
      onEnter() {
        _this.startAnim();
      }
    });
  }

  startAnim() {
    this.tl
      .to(this.$title, .3, { autoAlpha: 1, y: 0 }, '-=0.1')
      .to(this.$descrTitle, .3, { autoAlpha: 1, y: 0 }, '-=0.1')
      .to(this.$titleCount, .5, { autoAlpha: 1, rotation: 0 }, '-=0.1')
      .to(this.$titleCountText, .5, { autoAlpha: 1 }, '-=0.1')
      .to(this.$descrText, .3, { autoAlpha: 1, y: 0 }, '-=0.1');
  }
}

export default new Projects();
