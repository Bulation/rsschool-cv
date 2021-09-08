const menu = document.querySelector('.hamburger');
const menuline = document.querySelector(".hamburger__line");
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const navigation = document.querySelector('nav');
menu.addEventListener('click', () => { 
    menuline.classList.toggle('active-menu');
    menuline.classList.toggle("hamburger__line");
    navigation.classList.toggle('show');
    main.classList.toggle('hidden');
    footer.classList.toggle('hidden');
});