// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, _slideToggle } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


document.addEventListener('DOMContentLoaded', function() {

    const navItemSubMenu = document.querySelectorAll('.nav__item .sub-menu');
    const navItemMenuMenuItem = document.querySelectorAll('.nav__item .menu > .menu-item');
    const navItemMenuChildren = document.querySelectorAll('.nav__item .menu-item.menu-item-has-children');

    function hideSubMenusNavItem() {
        navItemSubMenu.forEach(subMenu => {
            subMenu.setAttribute('hidden', true);
        });
    }

    // HEADER ====================================
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

  function handleOutsideMenuClick(event) {
      const isClickInsideMenuContainer = event.target.closest('.menu-container');
      const isClickInsideMenuItem = event.target.closest('.menu-item');
      const isClickInsideMenuItemWithChildren = isClickInsideMenuItem && isClickInsideMenuItem.classList.contains('menu-item-has-children');

      if (!isClickInsideMenuContainer || (isClickInsideMenuItem && !isClickInsideMenuItemWithChildren)) {
          closeMenuItems();
          currentOpenItem = null;
      }
  }

  

  if (window.innerWidth >= 75.061 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
    document.addEventListener('click', handleOutsideMenuClick);
  }

  // Обработчик изменения размеров окна
  window.addEventListener('resize', function() {
      toggleSubMenus();
      if (window.innerWidth >= 75.061 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
          document.addEventListener('click', handleOutsideMenuClick);
      } else {
          document.removeEventListener('click', handleOutsideMenuClick);
      }
  });

  // Обработчик события клика на ссылки для HEADER ==========================
  if (headerMenuItems.length > 0) {
    toggleSubMenus();
      menuItemsWithChildren.forEach(item => {
          const link = item.querySelector('a');

          if (link) {
              link.addEventListener('click', function(event) {
                  event.preventDefault();

                  const parentMenuItem = link.closest('.menu-item');

                  if (window.innerWidth < 75.061 * parseFloat(getComputedStyle(document.documentElement).fontSize)) {
                      const subMenu = parentMenuItem.querySelector('.sub-menu');
                      _slideToggle(subMenu);
                      parentMenuItem.classList.toggle('_open');
                  } else {
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
                  }
              });
          }
      });


      // Обработчик события клика на ссылки для ASIDE MENU ==========================
    if (navItemMenuMenuItem.length > 0) {
        hideSubMenusNavItem();
        navItemMenuChildren.forEach(item => {
            const link = item.querySelector('a');
            if (link) {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
  
                    const parentMenuItem = link.closest('.menu-item');
                    const subMenu = parentMenuItem.querySelector('.sub-menu');
                    _slideToggle(subMenu);
                    parentMenuItem.classList.toggle('_open');
                });
            }
        });
    }

      // Обработчик клавиши Escape
      document.addEventListener('keydown', function(event) {
          if (event.key === 'Escape') {
              closeMenuItems();
              currentOpenItem = null;
          }
      });
  }
});
