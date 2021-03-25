const strip = document.querySelector('.strip');
const sectionGreyHeight = document.querySelector('.section--grey').offsetHeight;

strip.style.height = sectionGreyHeight + 'px';

window.addEventListener('resize', () => {
  let sectionGreyHeight = document.querySelector('.section--grey').offsetHeight;
  strip.style.height = sectionGreyHeight + 'px';
});


const searchInput = document.querySelector('.searchWrapper__input');
const searchWrapper = document.querySelector('.searchWrapper');

searchInput.addEventListener('focus', () => {
  searchWrapper.style.border = '1px solid #768298';
});

searchInput.addEventListener('blur', () => {
  searchWrapper.style.border = 'none';
});