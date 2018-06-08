import { Resp } from '../modules/dev/_helpers';

function AboutSection() {
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

  const $nav = $('.about__nav');
  const $navItem = $nav.children();
  const headerH = Resp.isDesk ? 60 : 103;

  $navItem.on('click', function (e) {
    e.preventDefault();
    const el = $(this).attr('href');
    $('html, body').animate({ scrollTop: $(el).offset().top - headerH }, 1000);
    return false;
  });
}

AboutSection();
