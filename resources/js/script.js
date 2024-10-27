document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav > ul");

    // Add event listener to toggle the menu visibility
    hamburger.addEventListener("click", function() {
        navMenu.classList.toggle("show-menu");
    });
});
