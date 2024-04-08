// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile, _slideToggle } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

const headerMenuItems = document.querySelectorAll('.menu-container .menu > .menu-item');
const menuItemsWithChildren = document.querySelectorAll('.menu-container .menu-item.menu-item-has-children');
let currentOpenItem = null;

function closeMenuItems() {
  menuItemsWithChildren.forEach(item => {
    item.classList.remove('_open');
  });
}

if (headerMenuItems.length > 0) {
  menuItemsWithChildren.forEach(item => {
    const link = item.querySelector('a');
    if (link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        if (currentOpenItem && currentOpenItem !== item) {
          currentOpenItem.classList.remove('_open');
        }
        if (currentOpenItem === item && item.classList.contains('_open')) {
          item.classList.remove('_open');
          currentOpenItem = null;
        } else {
          item.classList.add('_open');
          currentOpenItem = item;
        }
      });
    }
  });

  document.addEventListener('click', function(event) {
    const isClickInsideMenuContainer = event.target.closest('.menu-container');
    const isClickInsideMenuItem = event.target.closest('.menu-item');
    const isClickInsideMenuItemWithChildren = isClickInsideMenuItem && isClickInsideMenuItem.classList.contains('menu-item-has-children');
    
    if (!isClickInsideMenuContainer || (isClickInsideMenuItem && !isClickInsideMenuItemWithChildren)) {
      closeMenuItems();
      currentOpenItem = null;
    }
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeMenuItems();
      currentOpenItem = null;
    }
  });
}
