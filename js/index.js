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
         })
     })
 }

 app();


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