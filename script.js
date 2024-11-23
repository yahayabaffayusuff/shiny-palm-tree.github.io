const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const closeIcon = document.querySelector("#close-icon");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("open");
});










/*
const icons = document.querySelector(".icons");
const navbar = document.querySelector(".navbar");
const closeIcon = document.querySelector("#close-icon");


icons.addEventListener("click", () => {
    navbar.classList.toggle("active");
    icons.classList.toggle("open");

    const isOpen = navbar.classList.contains("open");
    icons.setAttribute("class", isOpen ? "bx bx-x" : "bx bx-x");
});
*/