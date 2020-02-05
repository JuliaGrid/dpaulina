let buttonOpenCloseMenu = document.querySelector('.main-header__menu-button');
let menu = document.querySelector('.main-header__menu-list');

buttonOpenCloseMenu.onclick = function() {
    menu.classList.toggle('open');
  };