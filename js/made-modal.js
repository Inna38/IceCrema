(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-made-modal-open]"),
    closeModalBtn: document.querySelector("[data-made-modal-close]"),
    modal: document.querySelector("[data-made-modal]"),
    made: document.querySelectorAll(".header-list__link"),
    readMore: document.querySelector(".advantages-btn"),
  };

  refs.openModalBtn.forEach((element) => {
    element.addEventListener("click", () => {
      refs.made.forEach((el) => {
        el.setAttribute("disabled", "disabled"), toggleModal();
      });

      refs.readMore.setAttribute("disabled", "disabled");
    });
  });

  refs.closeModalBtn.addEventListener("click", () => {
    refs.made.forEach((el) => {
      el.removeAttribute("disabled", "disabled"),
        refs.readMore.removeAttribute("disabled", "disabled");
      toggleModal();
    });
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
