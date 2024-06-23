
const nav = document.querySelector(".mobile-nav");
const menuber = document.querySelector(".nav-menu-btn");
const closenav = document.querySelector(".nav-close-btn");



const navigationtoggel = function (){nav.classList.toggle("actve");}

closenav.addEventListener('click', navigationtoggel);
menuber.addEventListener('click', navigationtoggel);

const themebtn = document.querySelector(".theme-btn-desktop");
const before = document.querySelector(".before");

themebtn.addEventListener("click", ()=>{
document.body.classList.toggle("dark-theme");
before.classList.toggle("befortogi");
    themebtn.classList.toggle("toggeller");
})

