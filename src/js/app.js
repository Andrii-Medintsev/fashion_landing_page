import * as saFunctions from './modules/functions.js';
saFunctions.isWebp();

const form = document.querySelector('.footer__form');
form.addEventListener('submit', (e) => e.preventDefault());
