const exitButton = document.querySelector('[data-close]');
const nav = document.querySelector('nav');

const navText = document.querySelector('.nav-text')


function closeNav() {
    nav.classList.toggle('hidden');
    navText.classList.toggle('hidden');
    
}

exitButton.addEventListener('click', closeNav);