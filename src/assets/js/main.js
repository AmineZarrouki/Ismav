// Import Swiper
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

// Import GLightbox
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

// Import ScrollReveal
import ScrollReveal from 'scrollreveal';

// Page loading
const pageLoading = document.querySelector(".page-loading");
if (pageLoading) {
  window.addEventListener("load", () => {
    pageLoading.classList.add("hide");
    setTimeout(() => {
      pageLoading.style.display = "none";
    }, 1000);
  });
}

// Navbar
const navbar = document.querySelector(".ic-navbar");
const navbarToggler = navbar?.querySelector("[data-web-toggle=navbar-collapse]");

if (navbar && navbarToggler) {
  navbarToggler.addEventListener("click", function () {
    const dataTarget = this.dataset.webTarget;
    const targetElement = document.getElementById(dataTarget);
    const isExpanded = this.ariaExpanded === "true";

    if (!targetElement) return;

    navbar.classList.toggle("menu-show");
    this.ariaExpanded = !isExpanded;
    navbarToggler.innerHTML = navbar.classList.contains("menu-show")
      ? '<i class="lni lni-close"></i>'
      : '<i class="lni lni-menu"></i>';
  });

  // Sticky navbar
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 72) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
}

// Web theme toggle
const webTheme = document.querySelector("[data-web-trigger=web-theme]");
const html = document.querySelector("html");

window.addEventListener("load", function () {
  let theme = localStorage.getItem("Inazuma_WebTheme");

  if (theme === "light") {
    webTheme.innerHTML = '<i class="lni lni-sun"></i>';
  } else if (theme === "dark") {
    webTheme.innerHTML = '<i class="lni lni-night"></i>';
  } else {
    theme = "light";
    localStorage.setItem("Inazuma_WebTheme", theme);
    webTheme.innerHTML = '<i class="lni lni-night"></i>';
  }

  html.dataset.webTheme = theme;
});

webTheme?.addEventListener("click", function () {
  let theme = localStorage.getItem("Inazuma_WebTheme");
  webTheme.innerHTML = theme === "dark"
    ? '<i class="lni lni-sun"></i>'
    : '<i class="lni lni-night"></i>';

  theme = theme === "dark" ? "light" : "dark";
  localStorage.setItem("Inazuma_WebTheme", theme);
  html.dataset.webTheme = theme;
});

// Scroll Reveal
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '16px',
  duration: 1000,
  reset: false,
});

sr.reveal(`.scroll-revealed`, {
  cleanup: true,
});

// GLightBox
GLightbox({
  selector: '.video-popup',
  href: 'https://www.youtube.com/watch?v=r44RKWyfcFw&fbclid=IwAR21beSJORalzmzokxDRcGfkZA1AtRTE__l5N4r09HcGS5Y6vOluyouM9EM',
  type: 'video',
  source: 'youtube',
  width: 900,
  autoplayVideos: true,
});

const myGallery3 = GLightbox({
  selector: '.portfolio-box',
  type: 'image',
  width: 900,
});

// Swiper Testimonial Carousel
const testimonialSwiper = new Swiper('.testimonial-carousel', {
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
