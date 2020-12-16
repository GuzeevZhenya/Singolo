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
 //  let images = document.querySelectorAll('.infinity-slider .slider-div');
 //  let current = 0;
 //  let color = document.querySelector('.slider');
 //  let secondSlider = document.querySelector('.slider-div--second');


 //  function slider() {
 //      for (let i = 0; i < images.length; i++) {
 //          images[i].classList.add('opacity0');
 //      }
 //      images[current].classList.remove('opacity0');
 //  }

 //  document.querySelector('.btn-infinity-up').onclick = function() {
 //      if (current - 1 == -1) {
 //          color.style.background = '#648BF0';
 //          color.style.borderColor = '#154bda';
 //          secondSlider.style.opacity = 1;
 //          current = images.length - 1;
 //      } else {
 //          color.style.background = '#f06c64';
 //          color.style.borderColor = '#ea676b';
 //          secondSlider.style.opacity = 0;
 //          current--;
 //      }
 //      slider();
 //  }

 //  document.querySelector('.btn-infinity-down').onclick = function() {
 //      if (current + 1 == images.length) {
 //          color.style.background = '#f06c64';
 //          color.style.borderColor = '#ea676b';
 //          secondSlider.style.opacity = 0;
 //          current = 0;
 //      } else {
 //          color.style.background = '#648BF0';
 //          color.style.borderColor = '#154bda';
 //          secondSlider.style.opacity = 1;
 //          current++;
 //      }
 //      slider();
 //  };

 let position = 0;
 const slidesToShow = 1;
 const slidesToScroll = 1;
 const container = document.querySelector('.slider__inner');
 const track = document.querySelector('.slider-track');
 const btnPrev = document.querySelector('.slider__left');
 const btnNext = document.querySelector('.slider__right');
 const items = document.querySelectorAll('.slider-div');
 const itemsCount = items.length;
 const itemWidth = container.clientWidth / slidesToShow;
 const movePosition = slidesToScroll * itemWidth;

 items.forEach((item) => {
     item.style.minWidth = `${itemWidth}px`;
 });

 btnNext.addEventListener('click', () => {
     const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
     position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
     setPosition();
     checkBtns();
 });

 btnPrev.addEventListener('click', () => {
     const itemsLeft = Math.abs(position) / itemWidth;
     position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
     setPosition();
     checkBtns();
 });

 const setPosition = () => {
     track.style.transform = `translateX(${position}px)`;
 };

 const checkBtns = () => {
     btnPrev.disabled = position === 0;
     btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
 };

 checkBtns();