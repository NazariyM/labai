class ContactMap {
  constructor() {
    this.$block = $('.contacts');
    this.$blockMod = $('.contacts_mod');

    if (this.$block.length) this.createMap();
    if (this.$blockMod.length) this.createMapMod();
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

  createMapMod() {
    const map = new google.maps.Map(document.querySelector('.contacts__map'), {
      center: new google.maps.LatLng(55.772345, 37.595351),
      zoom: 13,
      disableDefaultUI: true,
      styles: [{
        stylers: [{
          saturation: -100
        }]
      }]
    });

    const marker = new google.maps.Marker({
      position: { lat: 55.769462, lng: 37.626154 },
      icon: 'static/img/other/location-icon.svg',
      map: map
    });

    marker.setMap(map);
  }

}

export const ContactMapAPI = new ContactMap();
