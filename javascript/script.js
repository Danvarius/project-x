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

divs.forEach(el => {
   el.addEventListener('mouseover', () => {
     el.querySelector('.buy-wrapper').classList.toggle('visually-hidden');
   })
 })

divs.forEach(el => {
  el.addEventListener('mouseout', () => {
    el.querySelector('.buy-wrapper').classList.toggle('visually-hidden');
  })
})

/* Slider */


