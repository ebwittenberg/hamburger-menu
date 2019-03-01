const exitButton = document.querySelector('[data-close]');
const nav = document.querySelector('nav');

const navText = document.querySelector('.nav-text')
const menuBars = document.querySelector(".fa-bars")


function showNav() {
    nav.classList.remove('hidden');
    navText.classList.remove('hidden');
    menuBars.classList.remove('active');
}

function hideNav() {
    nav.classList.add('hidden');
    navText.classList.add('hidden');
    menuBars.classList.add('active');
}

exitButton.addEventListener('click', hideNav);
nav.addEventListener("mouseover", showNav);
nav.addEventListener("mouseleave", hideNav);