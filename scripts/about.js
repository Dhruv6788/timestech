const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const scrollToTopBtn = document.getElementById("scrollToTopBtn");


window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("main").classList.remove("hidden");
});

menuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

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
