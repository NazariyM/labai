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

        // This event expects a click on a marker
        google.maps.event.addListener(marker, 'click', function () {
          // hideAllInfoWindows(map);

          _this.$block.addClass('is-active');
          geoInfoWindow.open(map, marker);

          const setCenter = marker.getPosition(); // returns LatLng object
          map.setCenter(setCenter);
          map.panTo(setCenter);
          // this.infowindow.open(map, this);
        });

        // Event that closes the Info Window with a click on the map
        google.maps.event.addListener(map, 'click', function () {
          geoInfoWindow.close();
        });

        function hideAllInfoWindows(map) {
          markers.forEach(function (marker) {
            marker.infowindow.close(map, marker);
          });
        }

      });
    });

    google.maps.event.addListener(map, 'click', () => {
      _this.$block.addClass('is-active');
    });

    // $('body').on('click', (e) => {
    //   console.log(e.currentTarget);
    //   if (e.target !== this.$block) _this.$block.removeClass('is-active');
    // });
  }
}

export default new GeoWorkMap();
