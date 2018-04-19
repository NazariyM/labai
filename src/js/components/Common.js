import objectFitImages from 'object-fit-images';
import fancybox from '@fancyapps/fancybox';
import './NoTouch';

import './Anims';
import './Header';
import './Slider';
import './InNumbers';
import './Realized';
import './Dot';
import './ContactMap';
import './scrolls';

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
