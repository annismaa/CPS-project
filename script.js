function makeActiveOnClick(items, activeClass) {
  items.forEach((item) => {
    item.addEventListener("click", () => {
      items.forEach((el) => el.classList.remove(activeClass));
      item.classList.add(activeClass);
    });
  });
}

makeActiveOnClick(
  document.querySelectorAll(".navbar__item"),
  "navbar__item--active",
);

makeActiveOnClick(
  document.querySelectorAll(".sidebar__item"),
  "sidebar__item--active",
);

makeActiveOnClick(
  document.querySelectorAll(".languages__button"),
  "languages__button--active",
);

function setupToggleBlock({
  wrapperSelector,
  blockSelector,
  openButtonsSelector,
  closeButtonsSelector,
  hiddenClass,
}) {
  const wrapper = document.querySelector(wrapperSelector);
  const block = wrapper.querySelector(blockSelector);
  const openButtons = document.querySelectorAll(openButtonsSelector);
  const closeButtons = wrapper.querySelectorAll(closeButtonsSelector);

  const open = () => wrapper.classList.remove(hiddenClass);
  const close = () => wrapper.classList.add(hiddenClass);

  openButtons.forEach((btn) => btn.addEventListener("click", open));

  closeButtons.forEach((btn) => btn.addEventListener("click", close));

  wrapper.addEventListener("click", (e) => {
    if (!block.contains(e.target)) {
      close();
    }
  });
}

setupToggleBlock({
  wrapperSelector: ".sidebar-wrapper",
  blockSelector: ".sidebar",
  openButtonsSelector: ".button--burger",
  closeButtonsSelector: ".button--close",
  hiddenClass: "sidebar--hidden",
});

setupToggleBlock({
  wrapperSelector: ".feedback-container",
  blockSelector: ".feedback-form",
  openButtonsSelector: ".button--chat",
  closeButtonsSelector: ".button--close",
  hiddenClass: "feedback-form--hidden",
});

setupToggleBlock({
  wrapperSelector: ".request-container",
  blockSelector: ".request-form",
  openButtonsSelector: ".button--phone",
  closeButtonsSelector: ".button--close",
  hiddenClass: "request-form--hidden",
});

function toggleText(button) {
  const section = button.closest("section");
  const list = section.querySelector(".about-us__text");

  list.classList.toggle("about-us__text--active");

  const label = button.querySelector(".about-us__button-label");

  label.textContent = list.classList.contains("about-us__text--active")
    ? "Скрыть"
    : "Читать далее";
}

const readMoreButton = document.querySelector(".button--read-more");
readMoreButton.addEventListener("click", (e) => toggleText(e.currentTarget));

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
  const section = button.closest("section");
  const list = section.querySelector(".toggle-list");

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
