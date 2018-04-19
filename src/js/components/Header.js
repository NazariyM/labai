import { TweenMax } from 'gsap';
import {
  $body,
	$header,
  $window,
  throttle,
  css,
  Resp, $scrolledElements
} from '../modules/dev/_helpers'

class Header {
	constructor() {
		this.$nav = $('.header__nav');
		this.$navBtn = $('.nav-btn');

		this.init();
	}

	init() {
		this.bindEvents();

		if (!Resp.isDesk) {
      this.toggleNav();
    }
	}

	bindEvents() {
    this.initFix();
		this.show();

    if (Resp.isMobiles) this.toggleDropDown();
	}

	show() {
    TweenMax.to($header, .7, { y: 0, delay: .5, clearProps: 'all', onComplete: () => {
		    $header.removeClass('no-transition');
      } });
	}

	initFix() {
		const toggleHeaderScroll = throttle(() => {
			toggleHeader();
		}, 0, this);

		function toggleHeader() {
      if (window.pageYOffset > 0) {
				$header.addClass(css.fixed);
			} else {
				$header.removeClass(css.fixed);
			}
		}

		window.addEventListener('scroll', toggleHeaderScroll);
	}

  toggleNav() {
	  const _this = this;
    this.$navBtn.on('click tap', function () {
      $(this).toggleClass(css.active);
      _this.$nav.slideToggle();
    });
  }

  toggleDropDown() {
    const $btn = this.$nav.find('.has-dropdown');

    $btn.on('click tap', function(e) {

      $(this).next().slideToggle(0);
    });
  }

}

export const HeaderAPI = new Header();
