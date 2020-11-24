import "../css/main.css";

let menu = document.querySelector('.header__menu');
let hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    menu.classList.toggle("header__menu--active");
})