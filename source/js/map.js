var myMap;
var small_viewport  = 768;
var large_viewport  = 1300;

ymaps.ready(init);

function init () {
  var mapCenterLongLat;
  var placemarkLongLat;
  var placemarkSize;

  const viewport = document.documentElement.clientWidth || window.innerWidth;

  if (viewport <= small_viewport) {
    placemarkSize = [62, 53];
    mapCenterLongLat = [59.93863106417265,30.3230545];
    placemarkLongLat = [59.93863106417265,30.3230545];
  }
  else {
    placemarkSize = [124, 106];
    mapCenterLongLat = [59.93863106417265,30.3230545];
    placemarkLongLat = [59.93863106417265,30.3230545];
  }

  myMap = new ymaps.Map('map', {

  center: [59.93863106417265,30.3230545],
  zoom: 17
  }, {
    searchControlProvider: 'yandex#search'
  }),

  myPlacemark = new ymaps.Placemark([59.93863106417265,30.3230545], {
    hintContent: "ул. Большая Конюшенная 19/8, Санкт-Петербург",
    }, {
    iconLayout: "default#image",
    iconImageHref: "img/map-pin.png",
    iconImageSize: [62, 53],
    iconImageOffset: [-31, -25]
  });

  myMap.geoObjects.add(myPlacemark);
}
