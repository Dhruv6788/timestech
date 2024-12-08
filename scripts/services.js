const scrollToTopBtn = document.getElementById("scrollToTopBtn");
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
