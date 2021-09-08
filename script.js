const hamburger = document.querySelector('.hamburger');
const sideMenu = document.querySelector('.side-menu');
const sideMenuItems = document.querySelectorAll('.side-menu li')
const containers = document.querySelectorAll('.container')
const mark = document.querySelector('mark')
const closeMenu = document.querySelector('.close')
closeMenu.addEventListener('click', toggleHamburger);
hamburger.addEventListener('click', toggleHamburger);
for (let item of sideMenuItems)
  item.addEventListener("click", toggleHamburger);
function toggleHamburger() {
  sideMenu.classList.toggle("transform");
  for (let container of containers)
    container.classList.toggle('backFogging');
  mark.classList.toggle("black");
}