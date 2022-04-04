const menu = document.querySelector('.nav');
const button = document.querySelector('.header__btn');

button.addEventListener('click', function() {
  menu.classList.toggle('nav--hidden');
  button.classList.toggle('header__btn--opened');
});