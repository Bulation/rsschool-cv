const hamburger = document.querySelector('.hamburger');
const sideMenu = document.querySelector('.navigation');
const sideMenuItems = document.querySelectorAll(".navigation-list__item");
const containers = document.querySelectorAll('.container')
const mark = document.querySelector('mark')
const closeMenu = document.querySelector('.close')

closeMenu.addEventListener('click', toggleHamburger);
hamburger.addEventListener('click', toggleHamburger);
for (let item of sideMenuItems)
   item.addEventListener("click", toggleActiveClass);

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

function toggleActiveClass(e) {
    for (let item of sideMenuItems)
      item.firstChild.classList.remove("active");
    e.target.classList.add('active')
}

console.log('Вёрстка валидная +10')
console.log("Вёрстка семантическая +20. Присутствуют семантические теги header, nav, main, section, mark, footer, time, заголовки h1-h3 - +2 балла за каждый тег, итого 20/20");
console.log("Для оформления СV используются css-стили +10");
console.log(
  "Контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы +10"
);
console.log(
  "Вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется +10"
);
console.log(
  "Eсть меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. +10"
);
console.log(
  "На странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) +10"
);
console.log(
  "Контакты для связи и перечень навыков оформлены в виде списка ul > li +10"
);
console.log(
  "CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского +10"
);
console.log(
  "CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода может использоваться js-библиотека, например, highlight.js +10"
);
console.log(
  "CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. +10"
);
console.log("CV выполнено на английском языке +10");
console.log(
  "Выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) +10"
);
console.log(
  "Дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (это дополнительные 10 баллов, поэтому некоторый субъективизм в оценке может присутствовать) +10"
);
console.log('Итого: 150/160')