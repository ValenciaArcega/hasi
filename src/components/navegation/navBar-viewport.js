'use strict';

let viewPort = window.matchMedia("(max-width: 450px)");

const view_DESKTOP = document.querySelector('.navBar-desktop');
const view_MOBILE = document.querySelector('.navBar-mobile');

const mediaScreen = (y) => {
  if (y.matches) {
    view_DESKTOP.classList.add('hidden');
    view_MOBILE.classList.remove('hidden');
  } else {
    view_DESKTOP.classList.remove('hidden');
    view_MOBILE.classList.add('hidden');
  }
};
mediaScreen(viewPort);
viewPort.addListener(mediaScreen);
