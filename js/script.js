const footerYear = document.querySelector('.footer__year');
const hamburgerIcon = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');
const allNavLink = document.querySelectorAll('.mobile-link')

const closeNav = () => {
    hamburgerIcon.classList.remove('is-active')
    navMobile.classList.remove('nav-mobile--active')
}

allNavLink.forEach(link => link.addEventListener('click', closeNav))

const menuHamburger = () => {
    hamburgerIcon.classList.toggle('is-active')
    navMobile.classList.toggle('nav-mobile--active')
}

hamburgerIcon.addEventListener('click', menuHamburger);




// current year in footer
currentYear = (new Date()).getFullYear();
footerYear.innerText = `${currentYear} `





