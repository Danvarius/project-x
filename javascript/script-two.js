const item = document.querySelectorAll('.catalog-items');
var closeLinkThree = document.querySelector('.close-link-three');
var catalogPopup = document.querySelector('.popup-catalog');

item.forEach(el => {
   el.addEventListener('mouseover', () => {
     el.querySelector('.catalog-buy').classList.toggle('none');
   })
 })

item.forEach(el => {
  el.addEventListener('mouseout', () => {
    el.querySelector('.catalog-buy').classList.toggle('none');
  })
})

item.forEach(el => { 
  el.addEventListener('click', () => { 
     document.querySelector('.popup-catalog').classList.add('popup-catalog-vis'); 
  });
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
     if (catalogPopup.classList.contains("popup-catalog-vis")) {
        evt.preventDefault();
        catalogPopup.classList.remove("popup-catalog-vis");
     }
  }
});

closeLinkThree.addEventListener("click", function(evt) {
  evt.preventDefault();
  catalogPopup.classList.remove('popup-catalog-vis');
})