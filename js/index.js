 function app() {
     const buttons = document.querySelectorAll('.portfolio__tag');
     const cards = document.querySelectorAll('.card');

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
         button.addEventListener('click', () => {
             const currentCategory = button.dataset.filter;
             filter(currentCategory, cards);
         });
     });
 }

 app();

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


 //Slider
 let images = document.querySelectorAll('.infinity-slider .slider-div');
 let current = 0;
 let color = document.querySelector('.slider');
 let secondSlider = document.querySelector('.slider-div--second');

 function slider() {
     for (let i = 0; i < images.length; i++) {
         images[i].classList.add('opacity0');
     }
     images[current].classList.remove('opacity0');
 }

 document.querySelector('.btn-infinity-up').onclick = function() {
     if (current - 1 == -1) {
         color.style.background = '#648BF0';
         color.style.borderColor = '#154bda';
         secondSlider.style.opacity = 1;
         current = images.length - 1;
     } else {
         color.style.background = '#f06c64';
         color.style.borderColor = '#ea676b';
         secondSlider.style.opacity = 0;
         current--;
     }
     slider();
 }

 document.querySelector('.btn-infinity-down').onclick = function() {
     if (current + 1 == images.length) {
         color.style.background = '#f06c64';
         color.style.borderColor = '#ea676b';
         secondSlider.style.opacity = 0;
         current = 0;
     } else {
         color.style.background = '#648BF0';
         color.style.borderColor = '#154bda';
         secondSlider.style.opacity = 1;
         current++;
     }
     slider();
 };