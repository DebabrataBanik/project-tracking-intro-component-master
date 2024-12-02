const ham = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const nav = document.querySelector('.navigation');

ham.addEventListener('click', () => {
  nav.classList.add('display');
  ham.classList.add('hide');
  close.classList.remove('hide');
});

close.addEventListener('click', () => {
  nav.classList.remove('display');
  ham.classList.remove('hide');
  close.classList.add('hide');
});