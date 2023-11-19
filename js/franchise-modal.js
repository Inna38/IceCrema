(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-franchise-modal-open]"),
    closeModalBtn: document.querySelector("[data-franchise-modal-close]"),
    modal: document.querySelector("[data-franchise-modal]"),
    franchise: document.querySelector(".address-btn"),
  };

  refs.openModalBtn.addEventListener("click", () => {
    refs.franchise.setAttribute("disabled", "disabled"), toggleModal();
  });
  refs.closeModalBtn.addEventListener("click", () => {
    refs.franchise.removeAttribute("disabled", "disabled"), toggleModal();
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
