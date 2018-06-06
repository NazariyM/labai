class GeoWorkMap {
  constructor() {
    this.$block = $('.geo-work');

    if (this.$block.length) this.init();
  }

  init() {
    this.createMap();
  }

  createMap() {
    const _this = this;

    const map = new google.maps.Map(document.querySelector('.geo-work__map'), {
      center: new google.maps.LatLng(55.769438, 37.627655),
      zoom: 14,
      disableDefaultUI: true,
      styles: [{
        stylers: [{
          saturation: -100
        }]
      }]
    });

    // get data
    $.getJSON('static/data/geo-work.json', function (json) {
      $.each(json, function (key, data) {

        const content = `
        <div class="geo-work__info">
          <h6 class="geo-work__info-title">${data.title}</h6>
          <p class="geo-work__info-descr">${data.description}</p>
        </div>`;

        const markers = [];
        const latLng = new google.maps.LatLng(data.coords[0], data.coords[1]);

        const geoInfoWindow = new google.maps.InfoWindow({
          content: content
        });

        const marker = new google.maps.Marker({
          position: latLng,
          icon: 'static/img/other/location-icon.svg',
          map: map,
          infowindow: geoInfoWindow
        });

        marker.setMap(map);

        google.maps.event.addListener(marker, 'click', function () {

          _this.$block.addClass('is-active');
          geoInfoWindow.open(map, marker);

          const setCenter = marker.getPosition();
          map.setCenter(setCenter);
          map.panTo(setCenter);
        });

        google.maps.event.addListener(map, 'click', function () {
          geoInfoWindow.close();
        });
      });
    });

    google.maps.event.addListener(map, 'click', () => {
      _this.$block.addClass('is-active');
    });
  }
}

export default new GeoWorkMap();
