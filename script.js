let menu = document.querySelector('.header__menu');
let hamburger = document.querySelector('.hamburger');
let writeButton = document.querySelector('.footer__write');
let modal = document.querySelector('.modal__window');
let closeButton = document.querySelector('.modal__close');

hamburger.addEventListener('click', () => {
    menu.classList.toggle("header__menu--active");
    hamburger.classList.toggle("hamburger--active");
});

writeButton.addEventListener('click', () => {
    modal.classList.toggle("modal__window--active");
});

closeButton.addEventListener('click', () => {
    modal.classList.toggle("modal__window--active");
});

window.addEventListener('click', (e) => {
    if(e.target == modal){
        modal.classList.toggle("modal__window--active");
    }
});