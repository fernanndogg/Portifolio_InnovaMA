lucide.createIcons();

// menu.js
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const navHeader = document.getElementById("nav_header");
    const hamburgerIcon = document.getElementById("hamburger-icon");

    hamburger.addEventListener("click", function() {

        if (hamburgerIcon.getAttribute("data-lucide") === "menu") {
            hamburgerIcon.setAttribute("data-lucide", "x");
            navHeader.classList.add("active");
        } else {
            hamburgerIcon.setAttribute("data-lucide", "menu");
            navHeader.classList.remove("active");
        }
        lucide.createIcons();
    });
});

