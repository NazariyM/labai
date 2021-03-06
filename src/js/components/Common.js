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
import './Projects';
import './About';

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
