import { $scrolledElements } from '../modules/dev/_helpers';
import objectFitImages from 'object-fit-images';
import fancybox from '@fancyapps/fancybox';
import './NoTouch';

import './Anims';
import './Header';
import './Slider';
import './InNumbers';
import './Realized';
import './ContactMap';

export class Common {
  /**
   * Cache data, make preparations and initialize common scripts.
   */
  constructor() {
    this.init();
  }
  /**
   * Initialize common scripts.
   */
  init() {
    objectFitImages();
  }
}

/** Export initialized common scripts by default */
export default new Common();

$('.anim-mouse').on('click tap', function () {
  const navHeight = $('.header__nav').outerHeight();
  const $section = $(this).closest('section').next().offset().top - navHeight;

  $scrolledElements.animate({ scrollTop: $section }, 500);
});
