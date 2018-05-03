import ScrollMagic from 'ScrollMagic';
// import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
import { TimelineMax, TweenMax } from 'gsap';
import { Resp } from '../modules/dev/_helpers';

class Parallax {
	/**
	 * @param {string|*} el - target element
	 */
	constructor(el = document) {
		this.$el = $(el);

		this.init();
	}

	init() {
		// check if element exists, dekstop screen
		if (!this.$el || !Resp.isDesk) return;

		this.createController();
		this.$el.each((index, el) => {
			this.createScene(el);
		});
	}

	createController() {
		// controller
		this.controller = new ScrollMagic.Controller({ addIndicators: false });
	}

	createScene(el) {
    console.log('kek');
    // get speed
		let speed = $(el).data('parallax-speed') || 1;

		// timeline
		let tl = new TimelineMax()
			.add([
				TweenMax.fromTo(el, 1, {y: 50 * speed, ease: Power4.easeOut}, {y: 0, ease: Power4.easeOut})
			]);

		// scene
		let scene = new ScrollMagic.Scene({
			triggerElement: el,
			triggerHook: 1,
			duration: '100%'
		})
			.setTween(tl)
			.addTo(this.controller);
	}
}

export default new Parallax('.js-parallax');
