class ContactMap {
  constructor() {
    this.$block = $('.contacts');

    if (this.$block.length) this.init();
  }

  init() {
    this.createMap();
  }

  createMap() {

    const map = new google.maps.Map(document.querySelector('.contacts__map'), {
      center: new google.maps.LatLng(55.769438, 37.627655),
      zoom: 17,
      disableDefaultUI: true,
      styles: [{
        stylers: [{
          saturation: -100
        }]
      }]
    });

    const marker = new google.maps.Marker({
      position: new google.maps.LatLng(55.769613, 37.626198),
      icon: 'static/img/other/map-marker.png',
      map: map
    });
  }

}

export const ContactMapAPI = new ContactMap();
