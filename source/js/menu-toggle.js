const menu_toggle = document.querySelector(".page-header__menu-toggle");
const navigation  = document.querySelector(".site-navigation__list");

menu_toggle.addEventListener("click", function(evt) {
  evt.preventDefault();

  if (menu_toggle.classList.contains("page-header__menu-toggle--open")) {
    menu_toggle.classList.remove("page-header__menu-toggle--open");
    menu_toggle.classList.add("page-header__menu-toggle--close");
    navigation.classList.add("site-navigation__list--open");
  }

  else {
    menu_toggle.classList.remove("page-header__menu-toggle--close");
    menu_toggle.classList.add("page-header__menu-toggle--open");
    navigation.classList.remove("site-navigation__list--open");
  }
});
