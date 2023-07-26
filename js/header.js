const menuToggle = document.querySelector('.menu__toggle-icon');
const menuMobile = document.querySelector('#mobile-menu');
const menuClose = document.querySelector('span.close')

const navbar = document.querySelector('header');

function setMainMarginTop() {
  const navbarHeight = navbar.offsetHeight;
  const main = document.querySelector('main');
  main.style.marginTop = `${navbarHeight}px`;
}

window.addEventListener('DOMContentLoaded', setMainMarginTop);
window.addEventListener('resize', setMainMarginTop);

menuToggle.addEventListener('click', () => {
  menuMobile.style.width = '100%';
});

menuClose.addEventListener('click', () => {
  menuMobile.style.width = '0%';
});
