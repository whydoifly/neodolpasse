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

// const paginator = document.querySelector('.paginator');

// // paginator.addEventListener('click', (event) => {
// //   pagination(event, 8, 3, paginator);
// // });


// // Пагинация 
// function pagination (event, count, cnt, paginator) {
//   console.log(event)
//   var count = count; // всего записей
//   var cnt = cnt; // сколько отображаем сначала
//   var cnt_page = Math.ceil(count / cnt); // кол-во страниц

// // Выводим список страниц
// var paginator = paginator;
// var page = "";
// for (var i = 0; i < cnt_page; i++) {
//     page += "<span data-page=" + i * cnt + "  id=\"page" + (i + 1) + "\">" + (i + 1) + "</span>";
// }
// paginator.innerHTML = page;

// // Выводим первые записи {cnt}
// var div_num = document.querySelectorAll(".num");
// for (var i = 0; i < div_num.length; i++) {
//     if (i < cnt) {
//         div_num[i].style.display = "flex";
//     }
// }

// var main_page = document.getElementById("page1");
// main_page.classList.add("paginator_active");

// // Листаем
//     var e = event || window.event;
//     var target = e.target;
//     var id = target.id;

//     if (target.tagName.toLowerCase() != "span") return;

//     var num_ = id.substr(4);
//     var data_page = +target.dataset.page;
//     main_page.classList.remove("paginator_active");
//     main_page = document.getElementById(id);
//     main_page.classList.add("paginator_active");

//     var j = 0;
//     for (var i = 0; i < div_num.length; i++) {
//         var data_num = div_num[i].dataset.num;
//         if (data_num <= data_page || data_num >= data_page)
//             div_num[i].style.display = "none";

//     }
//     for (var i = data_page; i < div_num.length; i++) {
//         if (j >= cnt) break;
//         div_num[i].style.display = "block";
//         j++;
//     }
// }


