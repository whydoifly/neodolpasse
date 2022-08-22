import * as allFunctions from './modules/functions.js';
import * as modalLoader from './modules/modal.js';

allFunctions.isWebp();
modalLoader.modalLoader();

import Swiper from 'swiper';

const swiperArticles = new Swiper('.articles-swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
});

const swiperResearches = new Swiper('.researches-swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
});

// Функционал бургер-меню
let burgerImg = document.querySelector('.burger-icon');
let burgerImgAlt = document.querySelector('.burger-alt');
let mobileMenu = document.querySelector('.mobile-menu');
let mobileMenuLinks = document.querySelectorAll('.mobile-menu__link_a');
let docBody = document.querySelector('body');

burgerImg.addEventListener('click', () => {
  if (mobileMenu.style.display !== 'block') {
    mobileMenu.style.display = 'block';
    docBody.style.overflow = 'hidden';
  } else {
    mobileMenu.style.display = 'none';
    docBody.style.overflow = 'visible';
  }
});

burgerImgAlt.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  docBody.style.overflow = 'visible';
});

for (let link of mobileMenuLinks) {
  link.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    docBody.style.overflow = 'visible';
  });
}

// Pop-up для медицинского применения
let useBlockBtns = document.querySelectorAll('.use-block__more');

for (let btn of useBlockBtns) {
  btn.addEventListener('click', () => {
    clearPopUps();
    btn.nextElementSibling.classList.add('show');
    let closePopUp = btn.nextElementSibling.querySelector('.pop-up__cross');
    closePopUp.addEventListener('click', () => {
      btn.nextElementSibling.classList.remove('show');
    });
  });
}

function clearPopUps() {
  let allPopUps = document.querySelectorAll('.use-block__pop-up');
  for (let popup of allPopUps) {
    popup.classList.contains('show') ? popup.classList.remove('show') : '';
  }
}

// Функционал кнопки наверх
//Get the button:
let topBtn1 = document.getElementById('top-btn-1');
let topBtn2 = document.getElementById('top-btn-2');

[topBtn1, topBtn2].forEach((btn) => {
  btn.addEventListener('click', () => {
    topFunction();
  });
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Модальное окно с подтверждением специалиста здравоохранения
// document.addEventListener('DOMContentLoaded', () => {
//   let modal = document.querySelector('.modal-spec');
//   let confirmModalBtn = document.querySelector('.modal-spec__confirm-btn');
//   let darkenBg = document.querySelector('.darken-bg');

//   modal.classList.add('show');
//   darkenBg.classList.add('show');

//   confirmModalBtn.addEventListener('click', () => {
//     modal.classList.remove('show');
//     darkenBg.classList.remove('show');
//   });
// });
