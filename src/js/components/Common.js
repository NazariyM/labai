import { css, Resp } from '../modules/dev/_helpers';

import objectFitImages from 'object-fit-images';
import 'jquery-parallax.js';
import fancybox from '@fancyapps/fancybox';
import './NoTouch';

import './Anims';
import './Header';
import './Slider';
import './CTabs';
import './InNumbers';
import './Realized';
import './Dot';
import './HoverTabs';
import './ExpandText';
import './Parallax';
import './Accordion';
import './Stages';
import './ContactMap';
import './GeoWorkMap';
import './scrolls';
import './initChangeText';
import './Steps';
import './Popup';

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

function changeImgOnHover() {
  const $block = $('.about__content');

  $block.each(function (i, el) {
    const $img = $(el).find('.about__content-img');
    const $text = $(el).find('.about__content-text');

    $text.on('mouseenter', () => {
      $img.slideUp();
      $img.not('.is-active').slideDown();
    });

    $text.on('mouseleave', () => {
      $img.slideDown();
      $img.not('.is-active').slideUp();
    });
  });
}

changeImgOnHover();
