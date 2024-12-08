import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
const menu = document.getElementById("menu");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");

menu.addEventListener("change", () => {
  if(menu.checked){
    menuIcon.classList.remove("ri-menu-3-line");
    menuIcon.classList.add("ri-close-line");
  }
  else{
    menuIcon.classList.remove("ri-close-line");
    menuIcon.classList.add("ri-menu-3-line");
  }
  mobileMenu.classList.toggle("hidden");
});

window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("main").classList.remove("hidden");
});

let headerText = document.getElementById("header-text");
let textArray = [
  "Unlock Your Digital Future",
  "Explore Cutting-Edge Solutions",
  "Transform Your Business",
];
let index = 0;

function changeHeaderText() {
  headerText.textContent = textArray[index];
  index = (index + 1) % textArray.length;
}

setInterval(changeHeaderText, 4000);

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollToTopBtn.style.opacity = "1";
  } else {
    scrollToTopBtn.style.opacity = "0";
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Swiper js for pagination

const swiperElement = document.getElementsByTagName("swiper-container");

var swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
