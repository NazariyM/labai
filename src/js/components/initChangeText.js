import { changeText } from '../modules/dev/_helpers';

class ChangeText {
  constructor() {
    this.$el = $('.js-change-text');
  }

  bindEvents() {
    this.$el.on('click tap', function (e) {
      e.preventDefault();
      const $thisText = $(this).find('span');

      changeText($thisText);
    });
  }

  init() {
    this.bindEvents();
  }

}

export default new ChangeText().init();
