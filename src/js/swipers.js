import Swiper from "swiper";
import { Pagination, Navigation } from "swiper/modules";

const breakpoint = 768;
const swipers = new Map();

function initSwiper(swiperEl) {
  const slidesPerView = swiperEl.classList.contains("my-swiper--table")
    ? 1.2
    : 1.25;

  return new Swiper(swiperEl, {
    modules: [Pagination, Navigation],

    slidesPerView,
    direction: "horizontal",
    loop: true,
    spaceBetween: 16,

    pagination: {
      el: swiperEl.querySelector(".swiper-pagination"),
      clickable: true,
    },
  });
}

function checkSwipers() {
  // const isMobile = document.body.clientWidth < breakpoint;
  const isMobile = window.innerWidth < breakpoint;
  const swiperElements = document.querySelectorAll(".my-swiper");

  swiperElements.forEach((swiperEl) => {
    if (isMobile && !swipers.has(swiperEl)) {
      const instance = initSwiper(swiperEl);
      swipers.set(swiperEl, instance);
    }

    if (!isMobile && swipers.has(swiperEl)) {
      swipers.get(swiperEl).destroy(true, true);
      swipers.delete(swiperEl);
    }
  });
}

checkSwipers();
window.addEventListener("resize", checkSwipers);
