import { $window, Resp } from '../modules/dev/_helpers';

class Parallax {
  constructor () {
    this.items = document.querySelectorAll('.parallax-bg');

    if (!Resp.isDesk) this.init();

  }

  init() {
    window.addEventListener('resize', () => {
      this.onResize();
    });
  }

  onResize() {
    console.log('did');
    for (const item of this.items) {
      const img = item.dataset.imageSrc;

      item.style.backgroundImage = `url(${img})`;
      item.removeAttribute('data-parallax');
    }
  }
}

export default new Parallax();
