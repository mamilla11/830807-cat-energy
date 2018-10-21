var myMap;

const tablet_viewport = 748;
const desktop_viewport = 1280;
const placemarkImage = "img/raster/map-pin.png";

window.addEventListener("resize", update);
ymaps.ready(init);

function init () {
  myMap = new ymaps.Map('map', {
    center: [59.93863106417265,30.3230545],
    zoom: 18
    }, {
      searchControlProvider: 'yandex#search'
    });
  
  update();
}

function update() {
  var mapCenterLongLat;
  var placemarkLongLat;
  var placemarkSize;
  var placemarkOfst;
  var mapZoom;

  const viewport = document.documentElement.clientWidth || window.innerWidth;
  console.log(viewport);

  if (viewport < tablet_viewport) {
    placemarkSize = [62, 53];
    placemarkOfst = [-31, -43];
    mapCenterLongLat = [59.93863106417265,30.3230545];
    placemarkLongLat = [59.93863106417265,30.3230545];
    mapZoom = 17;
  }
  else if (viewport < desktop_viewport) {
    placemarkSize = [124, 106];
    placemarkOfst = [-61, -53];
    mapCenterLongLat = [59.93863106417265,30.3230545];
    placemarkLongLat = [59.93863106417265,30.3230545];
    mapZoom = 18;
  }

  else {
    placemarkSize = [124, 106];
    placemarkOfst = [-57, -53];
    mapCenterLongLat = [59.93863106417265,30.319449611083996];
    placemarkLongLat = [59.93863106417265,30.3230545];
    mapZoom = 17;
  }

  myMap.setCenter(mapCenterLongLat, mapZoom, 'map');

  var myPlacemark = new ymaps.Placemark(placemarkLongLat, {
      hintContent: "ул. Большая Конюшенная 19/8, Санкт-Петербург",
    }, {
      iconLayout: "default#image",
      iconImageHref: placemarkImage,
      iconImageSize: placemarkSize,
      iconImageOffset: placemarkOfst
    }
  );

  myMap.geoObjects.removeAll();
  myMap.geoObjects.add(myPlacemark);
}


