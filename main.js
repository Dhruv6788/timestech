import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'


const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

window.addEventListener('load', () => {
  document.getElementById('preloader').style.display = 'none';
  document.getElementById('main').classList.remove('hidden');
  gsap.from('main', {
    opacity: 0,
    duration: 1.5
  })
})

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

const swiperElement = document.getElementsByTagName('swiper-container')

var swiper = new Swiper('.swiper', {
  pagination : {
    el : '.swiper-pagination',
    dynamicBullets: true
  }
})
