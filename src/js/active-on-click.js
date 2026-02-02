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
