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
      this.onResize();
    }
	}

	bindEvents() {
    this.initFix();
		this.show();

		if (!Resp.isMobiles) this.showHeaderOnScrollTop();
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

	showHeaderOnScrollTop() {
    window.onscroll = function(e) {
      if (this.oldScroll > this.scrollY) {
        $header.addClass('scrolled-top');
      } else {
        $header.removeClass('scrolled-top');
      }
      this.oldScroll = this.scrollY;
    }
	}

  toggleNav() {
	  const _this = this;
    this.$navBtn.on('click tap', function () {
      $(this).toggleClass(css.active);
      _this.$nav.slideToggle();
    });
  }

  onResize() {
    $window.on('resize', () => {
      this.$nav.removeAttr('style');
      this.$navBtn.removeClass(css.active);
      $body.removeClass(css.locked);
    });
  }

}

export const HeaderAPI = new Header();
