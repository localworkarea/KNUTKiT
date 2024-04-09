// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, _slideToggle } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// document.addEventListener('DOMContentLoaded', function() {

//   const subMenus = document.querySelectorAll('.menu-container .sub-menu');
//   if (window.innerWidth < 75.061 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
//     subMenus.forEach(subMenu => {
//         subMenu.setAttribute('hidden', true);
//     });
//   }

//   const headerMenuItems = document.querySelectorAll('.menu-container .menu > .menu-item');
//   const menuItemsWithChildren = document.querySelectorAll('.menu-container .menu-item.menu-item-has-children');
//   let currentOpenItem = null;

//   function closeMenuItems() {
//       menuItemsWithChildren.forEach(item => {
//           item.classList.remove('_open');
//       });
//   }

//   if (headerMenuItems.length > 0) {
//       menuItemsWithChildren.forEach(item => {
//           const link = item.querySelector('a');

//           if (link) {
//               link.addEventListener('click', function(event) {
//                   event.preventDefault();

//                   const parentMenuItem = link.closest('.menu-item');

//                   if (currentOpenItem && currentOpenItem !== parentMenuItem) {
//                       currentOpenItem.classList.remove('_open');
//                   }
//                   if (currentOpenItem === parentMenuItem && parentMenuItem.classList.contains('_open')) {
//                       parentMenuItem.classList.remove('_open');
//                       currentOpenItem = null;
//                   } else {
//                       parentMenuItem.classList.add('_open');
//                       currentOpenItem = parentMenuItem;
//                   }

//                   if (window.innerWidth < 75.061 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
//                       const subMenu = parentMenuItem.querySelector('.sub-menu');
//                       _slideToggle(subMenu);
//                   }
//               });
//           }
//       });

//       document.addEventListener('click', function(event) {
//           const isClickInsideMenuContainer = event.target.closest('.menu-container');
//           const isClickInsideMenuItem = event.target.closest('.menu-item');
//           const isClickInsideMenuItemWithChildren = isClickInsideMenuItem && isClickInsideMenuItem.classList.contains('menu-item-has-children');

//           if (!isClickInsideMenuContainer || (isClickInsideMenuItem && !isClickInsideMenuItemWithChildren)) {
//               closeMenuItems();
//               currentOpenItem = null;
//           }
//       });

//       document.addEventListener('keydown', function(event) {
//           if (event.key === 'Escape') {
//               closeMenuItems();
//               currentOpenItem = null;
//           }
//       });
//   }
// });



document.addEventListener('DOMContentLoaded', function() {


  // HEADER - ОТКРЫТИЕ ЗАКРЫТИЕ ПОД МЕНЮ,  ДОБАЛЕНИЕ/УДАЛЕНИЕ КЛАССА _open, вызов функции _slideToggle для скрытого меню в бургер -------------------------------
  const subMenus = document.querySelectorAll('.menu-container .sub-menu');
  const headerMenuItems = document.querySelectorAll('.menu-container .menu > .menu-item');
  const menuItemsWithChildren = document.querySelectorAll('.menu-container .menu-item.menu-item-has-children');
  let currentOpenItem = null;

  function closeMenuItems() {
      menuItemsWithChildren.forEach(item => {
          item.classList.remove('_open');
      });
  }

  function hideSubMenus() {
      subMenus.forEach(subMenu => {
          subMenu.setAttribute('hidden', true);
      });
  }

  function showSubMenus() {
      subMenus.forEach(subMenu => {
          subMenu.removeAttribute('hidden');
      });
  }

  function toggleSubMenus() {
      if (window.innerWidth < 75.061 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
          hideSubMenus();
      } else {
          showSubMenus();
      }
  }

  toggleSubMenus();

  // Обработчик события клика на ссылки
  if (headerMenuItems.length > 0) {
      menuItemsWithChildren.forEach(item => {
          const link = item.querySelector('a');

          if (link) {
              link.addEventListener('click', function(event) {
                  event.preventDefault();

                  const parentMenuItem = link.closest('.menu-item');

                  if (currentOpenItem && currentOpenItem !== parentMenuItem) {
                      currentOpenItem.classList.remove('_open');
                  }
                  if (currentOpenItem === parentMenuItem && parentMenuItem.classList.contains('_open')) {
                      parentMenuItem.classList.remove('_open');
                      currentOpenItem = null;
                  } else {
                      parentMenuItem.classList.add('_open');
                      currentOpenItem = parentMenuItem;
                  }

                  if (window.innerWidth < 75.061 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
                      const subMenu = parentMenuItem.querySelector('.sub-menu');
                      _slideToggle(subMenu);
                  }
              });
          }
      });

      // Обработчик клика за пределами меню
      document.addEventListener('click', function(event) {
          const isClickInsideMenuContainer = event.target.closest('.menu-container');
          const isClickInsideMenuItem = event.target.closest('.menu-item');
          const isClickInsideMenuItemWithChildren = isClickInsideMenuItem && isClickInsideMenuItem.classList.contains('menu-item-has-children');

          if (!isClickInsideMenuContainer || (isClickInsideMenuItem && !isClickInsideMenuItemWithChildren)) {
              closeMenuItems();
              currentOpenItem = null;
          }
      });

      // Обработчик клавиши Escape
      document.addEventListener('keydown', function(event) {
          if (event.key === 'Escape') {
              closeMenuItems();
              currentOpenItem = null;
          }
      });
  }

  // Обработчик изменения размеров окна
  window.addEventListener('resize', function() {
      toggleSubMenus();
  });

  // ===================================================================================================



});
