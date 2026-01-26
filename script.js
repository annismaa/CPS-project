// const breakpoint = 768;
// let mySwiper = null;

// function initSwiper() {
//   const swiper = new Swiper(".my-swiper", {
//     slidesPerView: 1.25,
//     direction: "horizontal",
//     loop: true,
//     spaceBetween: 16,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });

//   return swiper;
// }

// function checkSwiper() {
//   if (document.body.clientWidth < breakpoint && !mySwiper) {
//     mySwiper = initSwiper();
//   } else if (document.body.clientWidth >= breakpoint && mySwiper) {
//     mySwiper.destroy(true, true);
//     mySwiper = null;
//   }
// }

// checkSwiper();
// window.addEventListener("resize", checkSwiper);

const breakpoint = 768;
const swipers = new Map();

function initSwiper(swiperEl) {
  const slidesPerView = swiperEl.classList.contains("my-swiper--table")
    ? 1.2
    : 1.25;

  return new Swiper(swiperEl, {
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
  const isMobile = document.body.clientWidth < breakpoint;
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

function toggleList(button) {
  const list = document.querySelector(".toggle-list");

  if (!list) return;

  list.classList.toggle("toggle-list--hidden");

  const icon = button.querySelector(".button--toggle__icon");
  const label = button.querySelector(".button--toggle__label");

  icon?.classList.toggle("button--toggle__icon--rotated");

  label.textContent = list.classList.contains("toggle-list--hidden")
    ? "Показать все"
    : "Скрыть";
}

document.querySelectorAll(".button--toggle").forEach((button) => {
  button.addEventListener("click", () => toggleList(button));
});

// const brandsList = document.querySelector(".repair__list");
// const buttonToggle = document.querySelector(".button--toggle");

// buttonToggle.addEventListener("click", () => {
//   brandsList.classList.toggle("repair__list--hidden");

//   const buttonToggleIcon = buttonToggle.querySelector(".repair__button-icon");
//   buttonToggleIcon.classList.toggle("repair__button-icon--rotated");

//   const buttonToggleText = buttonToggle.querySelector(".repair__button-label");

//   if (brandsList.classList.contains("repair__list--hidden")) {
//     buttonToggleText.textContent = "Показать все";
//   } else {
//     buttonToggleText.textContent = "Скрыть";
//   }
// });
