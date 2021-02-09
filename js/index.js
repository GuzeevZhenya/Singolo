function app() {
    const buttons = document.querySelectorAll('.portfolio__tag');
    const cards = document.querySelectorAll('.card');
    const portfolioSelected = document.querySelector('.portfolio__select-type');

    function filter(category, items) {
        items.forEach(item => {
            const isItemFiltered = !item.classList.contains(category);
            const isShowAll = category.toLowerCase() === 'all';
            if (isItemFiltered && !isShowAll) {
                item.classList.add('hide');

            } else {
                item.classList.remove('hide');
            }
        });
    }
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const currentCategory = button.dataset.filter;
            filter(currentCategory, cards);
        });
    });

    //Добавление цвета для кнопки, при ее нажатии
    portfolioSelected.addEventListener('click', function(e) {
        let active = document.querySelector(".portfolio__tag--active");
        if (e.target.classList.contains('portfolio__tag')) {
            if (active) {
                active.classList.remove('portfolio__tag--active');
            }
            e.target.classList.add('portfolio__tag--active');
        }
    })
}


app();

// //Скрывает картинки, если их больше 12
// function photoHidden() {
//     let images = document.querySelectorAll(".portfolio__images img");
//     for (let i = 0; i < images.length; i++) {
//         if (i >= 12) {
//             images[i].style.display = "none";
//         }
//     }
// }

// photoHidden();

function headerSelecter() {
    const menuList = document.querySelector('.header__menu');
    menuList.addEventListener('click', function(e) {
        let active = document.querySelector(".header__menu-link--selected");
        if (e.target.classList.contains('header__menu-link')) {
            if (active) {
                active.classList.remove('header__menu-link--selected');
            }
            e.target.classList.add('header__menu-link--selected');
        }
    })
}

headerSelecter();


//Popap
function popap() {
    const menuButton = document.querySelector('.header__button');
    const menuList = document.querySelector('.header__menu');

    //Добавляем обработчик событик к menuButton
    menuButton.addEventListener('click', () => {
        let expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
        //После нажатия меняем значение атрибута
        menuButton.setAttribute('aria-expanded', !expanded);
        menuButton.classList.toggle('header__button--open');
        menuList.classList.toggle('header__menu--open');
    });
}

popap();

//  let position = 0;
//  const slidesToShow = 1;
//  const slidesToScroll = 1;
//  const container = document.querySelector('.slider__inner');
//  const track = document.querySelector('.slider-track');
//  const btnPrev = document.querySelector('.slider__left');
//  const btnNext = document.querySelector('.slider__right');
//  const items = document.querySelectorAll('.slider-div');
//  const itemsCount = items.length;
//  const itemWidth = container.clientWidth / slidesToShow;
//  const movePosition = slidesToScroll * itemWidth;

//  items.forEach((item) => {
//      item.style.minWidth = `${itemWidth}px`;
//  });

//  btnNext.addEventListener('click', () => {
//      const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
//      position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
//      setPosition();
//      checkBtns();
//  });

//  btnPrev.addEventListener('click', () => {
//      const itemsLeft = Math.abs(position) / itemWidth;
//      position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
//      setPosition();
//      checkBtns();
//  });

//  const setPosition = () => {
//      track.style.transform = `translateX(${position}px)`;
//  };

//  const checkBtns = () => {
//      btnPrev.disabled = position === 0;
//      btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
//  };

//  checkBtns();


//  function scrolling() {
//      const anchors = document.querySelectorAll("a[href*='#']");
//      for (let anchor of anchors) {
//          anchor.addEventListener('click', (e) => {
//              e.preventDefault();
//              const blockID = anchor.getAttribute('href');
//              document.querySelector('' + blockID).scrollIntoView({
//                  behavior: "smooth",
//                  block: "start"
//              })
//          })
//      }
//  }

//  scrolling();

const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('#imgs .slider__image');
const buttonLeft = document.querySelector(".slider__left");
const buttonRight = document.querySelector(".slider__right");
let idx = 0;


buttonLeft.addEventListener('click', leftClick);
buttonRight.addEventListener('click', rightClick);

function leftClick() {
    idx--;
    if (idx < 0) {
        idx = img.length - 1;
    }

    imgs.style.transform = `translateX(${-idx * 1020}px)`;
}

function rightClick() {
    idx++;
    if (idx > img.length - 1) {
        idx = 0;
    }
    imgs.style.transform = `translateX(${-idx*1020}px)`;
}

//Прокрутка хедера 
window.onscroll = function showHeader() {
    let header = document.querySelector('.header');
    if (window.pageYOffset > 200) {
        header.classList.add('header__fixed');
    } else {
        header.classList.remove('header__fixed');
    }
}