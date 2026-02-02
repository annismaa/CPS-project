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
