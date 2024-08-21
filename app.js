const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click",(e)=>{
    navLinks.classList.remove("opne");
    menuBtnIcon.setAttribute("class","ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",  // Fixed typo here
    duration: 1000,
};

ScrollReveal().reveal(".header_container img", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header_container p", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".header_btns", {
    ...scrollRevealOption,
    delay: 1500,
});