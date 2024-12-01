window.addEventListener('load', () => {
    document.getElementById('preloader').style.display = 'none';
    document.getElementById('main').classList.remove('hidden');
})

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
  