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

function headerSelecter() {
    const menuList = document.querySelector('.header__menu');
    menuList.addEventListener('click', function(e) {
        let active = document.querySelector(".header__menu-link--selected");
        if (e.target.classList.contains('header__menu-link')) {
            if (active) {
                active.classList.remove('header__menu-link--selected');
            }
            e.target.classList.add('header__menu-link--selected');
            menuList.classList.toggle('header__menu--open');
        }
    })
}

headerSelecter();


//Popap
function popap() {
    const openMenuButton = document.querySelector('.header__button ');
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

const imgs = document.getElementById('imgs');
const img = document.querySelectorAll('#imgs .slider__image');
const buttonLeft = document.querySelector(".slider__left");
const buttonRight = document.querySelector(".slider__right");
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
let idx = 0;


buttonLeft.addEventListener('click', leftClick);
buttonRight.addEventListener('click', rightClick);

function leftClick() {
    idx--;
    if (idx < 0) {
        idx = img.length - 1;
    }

    if (screenWidth > 1020 || screenHeight > 1020) {
        imgs.style.transform = `translateX(${-idx* 1020 }px)`;
    } else {
        imgs.style.transform = `translateX(${-idx * screenWidth}px)`;
    }
}

function rightClick() {
    idx++;
    if (idx > img.length - 1) {
        idx = 0;
    }
    if (screenWidth > 1020 || screenHeight > 1020) {
        imgs.style.transform = `translateX(${-idx* 1020 }px)`;
    } else {
        imgs.style.transform = `translateX(${-idx * screenWidth }px)`;
    }
}

// //Прокрутка хедера 
// window.onscroll = function showHeader() {
//     let header = document.querySelector('.header');
//     if (window.pageYOffset > 10) {
//         header.classList.add('header__fixed');
//     } else {
//         header.classList.remove('header__fixed');
//     }
// }