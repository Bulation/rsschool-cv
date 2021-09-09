const hamburger = document.querySelector('.hamburger');
const sideMenu = document.querySelector('.navigation');
const sideMenuItems = document.querySelectorAll(".navigation-list__item");
const containers = document.querySelectorAll('.container')
const mark = document.querySelector('mark')
const closeMenu = document.querySelector('.close')

closeMenu.addEventListener('click', toggleHamburger);
hamburger.addEventListener('click', toggleHamburger);

for (let container of containers) {
  container.addEventListener("click", hideMenuByClickOnBody);
}

function toggleHamburger(e) {
  closeMenu.classList.toggle("hidden");
  sideMenu.classList.toggle("transform");
  for (let container of containers) {
    container.classList.toggle("backFogging");
  }
  for (let item of sideMenuItems)
    item.addEventListener("click", toggleHamburger);
  mark.classList.toggle("black");
}

function hideMenuByClickOnBody(e) {
  if (!e.target.closest(".navigation") && !e.target.closest(".hamburger") && !closeMenu.matches(".hidden"))
    toggleHamburger(e);
}