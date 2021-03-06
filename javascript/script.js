/* Popup */

var link = document.querySelector(".contacts-link");
var popup = document.querySelector(".popup");
var close = popup.querySelector(".close-link");
var form = popup.querySelector(".form-popup");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

var isStorageSupport = true;
var storage = "";

try {
   storage = localStorage.getItem("login");
} catch (err) {
   isStorageSupport = false;
}

link.addEventListener("click", function (evt){
   evt.preventDefault();
   popup.classList.add("popup-let");

   if (storage) {
      login.value = storage;
      password.focus();
   } else {
      login.focus();
   }
});

close.addEventListener("click", function (evt) {
   evt.preventDefault();
   popup.classList.remove("popup-let");
   popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
   if (!login.value || !password.value) {
      evt.preventDefault();
      popup.classList.add("modal-error");
   } else {
      if (isStorageSupport) {
         localStorage.setItem("login", login.value);
      }
   }
});

window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
      if (popup.classList.contains("popup")) {
         evt.preventDefault();
         popup.classList.remove("popup-let");
         popup.classList.remove("modal-error");
      }
   }
});

/* Modal map */

var mapLink = document.querySelector(".modal-link");
var map = document.querySelector(".modal-map");
var closeMap = document.querySelector(".close-link-two");

mapLink.addEventListener("click", function (evt) {
   evt.preventDefault();
   map.classList.add("map-let");
});

closeMap.addEventListener("click", function (evt) {
   evt.preventDefault();
   map.classList.remove("map-let");
});

window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
      if (map.classList.contains("modal-map")) {
         evt.preventDefault();
         map.classList.add("visually-hidden");
      }
   }
});

/* Popup-buy */

const divs = document.querySelectorAll('.cards-list__item');
var closeLinkThree = document.querySelector('.close-link-three');
var catalogPopup = document.querySelector('.popup-catalog');

divs.forEach(el => {
   el.addEventListener('mouseover', () => {
     el.querySelector('.buy-wrapper').classList.toggle('visually-hidden');
   });
 });

divs.forEach(el => {
  el.addEventListener('mouseout', () => {
    el.querySelector('.buy-wrapper').classList.toggle('visually-hidden');
  });
});

divs.forEach(el => { 
   el.addEventListener('click', () => { 
      document.querySelector('.popup-catalog').classList.add('popup-catalog-vis'); 
   });
});

closeLinkThree.addEventListener("click", function(evt) {
   evt.preventDefault();
   catalogPopup.classList.remove('popup-catalog-vis');
})

window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
      if (catalogPopup.classList.contains("popup-catalog-vis")) {
         evt.preventDefault();
         catalogPopup.classList.remove("popup-catalog-vis");
      }
   }
});
/* Slider */

var offerTwo = document.querySelector(".offer-big-two");
var pointerOne = document.querySelector(".offers__pointerones");
var pointerTwo = document.querySelector(".offers__pointertwo");

pointerTwo.addEventListener("click", function (evt) {
   evt.preventDefault();
   offerTwo.classList.add("display");
});

pointerOne.addEventListener("click", function (evt) {
   evt.preventDefault();
   offerTwo.classList.remove("display");
});

/* Delivery and etc */

 var oneLink = document.querySelector(".item-link");
 var twoLink = document.querySelector(".item-link-two");
 var threeLink = document.querySelector(".item-link-three");
 var aboutOne = document.querySelector(".about-advantage");
 var aboutTwo = document.querySelector(".about-advantage-gar");
 var aboutThree = document.querySelector(".about-advantage-cred");

 oneLink.addEventListener("click", function (evt) {
   evt.preventDefault();
   aboutOne.classList.remove("visually-hidden");
   aboutTwo.classList.add("visually-hidden");
   aboutThree.classList.add("visually-hidden");
});

 twoLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    aboutTwo.classList.remove("visually-hidden");
    aboutOne.classList.add("visually-hidden");
    aboutThree.classList.add("visually-hidden");
 });

 threeLink.addEventListener("click", function (evt) {
   evt.preventDefault();
   aboutThree.classList.remove("visually-hidden");
   aboutOne.classList.add("visually-hidden");
   aboutTwo.classList.add("visually-hidden");
});
