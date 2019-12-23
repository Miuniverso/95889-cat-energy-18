// Toggle mobile menu

let button = document.querySelector(".page-header__button");
let menu = document.querySelector(".main-nav");
let viewportWidth = window.innerWidth || document.documentElement.clientWidth;

if (viewportWidth < 768) {
  menu.classList.add("visually-hidden");
} else {
  menu.classList.remove("visually-hidden");
}

button.classList.remove("visually-hidden");

window.addEventListener("resize", function () {
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
	if (viewportWidth >= 768) {
    menu.classList.remove("visually-hidden");
	} else {
    menu.classList.add("visually-hidden");
	}
}, false);

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.toggle("visually-hidden");
  button.classList.toggle("page-header__button--close");
});

// Кастомный маркер мороженки на карте

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [59.938631, 30.323055],
          zoom: 18
      }, {
          searchControlProvider: 'yandex#search'
      }),

      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;"">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Cat Energy',
      }, {
          iconLayout: 'default#image',
          iconImageHref: 'img/map-pin.png',
          iconImageSize: [124, 106],
          iconImageOffset: [-40, -140]
      });

  myMap.geoObjects
      .add(myPlacemark);
});
