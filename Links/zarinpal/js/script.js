const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const crossIcon = document.querySelector('.hamburger-menu-cross');
const showMoreMenu = document.querySelector('#show-more-menu');
const showProductMenu = document.querySelector('#show-product-menu');

hamburgerIcon.addEventListener('click', function () {
  console.log(hamburgerMenu.style.transform);
  hamburgerMenu.classList.add('show-menu');
});

crossIcon.addEventListener('click', function () {
  hamburgerMenu.classList.remove('show-menu');
});

showMoreMenu.addEventListener('mouseenter', function (e) {
  const ul = e.target.childNodes[5];
  ul.style.animation = 'ShowUp 0.75s 1';
  ul.style.display = 'block';
});

showMoreMenu.addEventListener('mouseleave', function (e) {
  const ul = e.target.childNodes[5];
  ul.style.display = 'none';
});

showProductMenu.addEventListener('mouseenter', function (e) {
  const div = e.target.childNodes[2];
  div.style.animation = 'ShowUp 0.75s 1';
  div.style.display = 'flex';
});

showProductMenu.addEventListener('mouseleave', function (e) {
  const div = e.target.childNodes[2];
  div.style.display = 'none';
});