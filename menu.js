// MENU
const toggleMenu = () => {
    const navBar = document.querySelector('.nav-bar');
    const menuIcon = document.querySelector('.menu-icon');

    if (navBar.className === 'nav-bar') {
        navBar.className += ' responsive'
        menuIcon.style.transform = 'rotate(-90deg)'
    } else {
        navBar.className = 'nav-bar';
        menuIcon.style.transform = 'rotate(0)'
    }
}

// DROPDOWN FILTER INTERACTION

const selectBtn = document.querySelector (".select-btn"),
items = document.querySelectorAll (".item");

console.log(selectBtn,);