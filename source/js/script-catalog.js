var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__button");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

var modalToggle = document.querySelector(".sale__button");
var modal = document.querySelector(".overlay");

if (modalToggle) {
  modalToggle.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("overlay--show");
  });
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if(modal.classList.contains("overlay--show")) {
        modal.classList.remove("overlay--show");
        evt.preventDefault();
      }
    }
  });
}

var modalToggleCatalog = document.querySelector(".catalog__basket-add");

if (modalToggleCatalog) {
  modalToggleCatalog.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("overlay--show");
  });
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if(modal.classList.contains("overlay--show")) {
        modal.classList.remove("overlay--show");
        evt.preventDefault();
      }
    }
  });
}
