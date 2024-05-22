lucide.createIcons();

// menu.js
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navHeader = document.getElementById("nav_header");
    const hamburgerIcon = document.getElementById("hamburger-icon");
  
    hamburger.addEventListener("click", function() {
      navHeader.classList.toggle("active"); 
  
      const currentIcon = hamburgerIcon.getAttribute("data-lucide");
      if (currentIcon === "menu") {
        hamburgerIcon.setAttribute("data-lucide", "x");
      } else {
        hamburgerIcon.setAttribute("data-lucide", "menu"); 
      }
      lucide.createIcons(); 
    });
  });
  