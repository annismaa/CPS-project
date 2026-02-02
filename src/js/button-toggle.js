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
