const item = document.querySelectorAll('.catalog-items');

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