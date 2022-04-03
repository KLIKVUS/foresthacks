// const body = document.querySelector('body');
const header = document.querySelector('.header');
const menu = document.querySelector('.nav');
const button = document.querySelector('.header__btn');

button.addEventListener('click', function() {
  // body.style = body.style.length ? "" : "overflow: hidden;";
  menu.classList.toggle('nav--hidden');
  button.classList.toggle('header__btn--opened');
});

// menu.addEventListener('wheel', function(event) {
//   if (menu.scrollTop == 0 && event.deltaY < 0 || menu.scrollTop + menu.clientHeight == menu.scrollHeight && menu.deltaY > 0) {
//     event.preventDefault();
//   }
// });