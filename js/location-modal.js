(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-location-modal-open]"),
    closeModalBtn: document.querySelector("[data-location-modal-close]"),
    modal: document.querySelector("[data-location-modal]"),
    ourLocation: document.querySelector(".address-primary-btn"),
  };

  refs.openModalBtn.addEventListener("click", () => {
    refs.ourLocation.setAttribute("disabled", "disabled"), toggleModal();
  });
  refs.closeModalBtn.addEventListener("click", () => {
    refs.ourLocation.removeAttribute("disabled", "disabled"), toggleModal();
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
