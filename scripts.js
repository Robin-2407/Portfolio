// function toggleMenu() {
//     const menu = document.querySelector(".menu-links");
//     const icon = document.querySelector(".hamburger-icon");
//     menu.classList.toggle("open");
//     menu.classList.toggle("close");
// }

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    
    // Check if the menu is currently open
    if (menu.classList.contains("open")) {
      // Close the menu
      menu.classList.remove("open");
      icon.classList.remove("open");
    } else {
      // Open the menu
      menu.classList.add("open");
      icon.classList.add("open");
    }
  }
  