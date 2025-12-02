const breakpoint = 768;
let mySwiper = null;

function initSwiper() {
  const swiper = new Swiper(".brands__swiper", {
    slidesPerView: 1.25,
    direction: "horizontal",
    loop: true,
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  return swiper;
}

function checkSwiper() {
  if (document.body.clientWidth < breakpoint && !mySwiper) {
    mySwiper = initSwiper();
  } else if (document.body.clientWidth >= breakpoint && mySwiper) {
    mySwiper.destroy(true, true);
    mySwiper = null;
  }
}

checkSwiper();
window.addEventListener("resize", checkSwiper);

const brandsList = document.querySelector(".brands__list");
const buttonToggle = document.querySelector(".button--toggle");

buttonToggle.addEventListener("click", () => {
  brandsList.classList.toggle("brands__list--hidden");

  const buttonToggleIcon = buttonToggle.querySelector(".brands__button-icon");
  buttonToggleIcon.classList.toggle("brands__button-icon--rotated");

  const buttonToggleText = buttonToggle.querySelector(".brands__button-label");

  if (brandsList.classList.contains("brands__list--hidden")) {
    buttonToggleText.textContent = "Показать все";
  } else {
    buttonToggleText.textContent = "Скрыть";
  }
});
