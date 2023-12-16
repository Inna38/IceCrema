(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-franchise-modal-open]"),
    closeModalBtn: document.querySelector("[data-franchise-modal-close]"),
    modal: document.querySelector("[data-franchise-modal]"),
    franchise: document.querySelector(".address-btn"),
    formFranchise: document.querySelector(".form-franchise"),
  };

  refs.openModalBtn.addEventListener("click", () => {
    refs.franchise.setAttribute("disabled", "disabled"), toggleModal();
  });
  refs.closeModalBtn.addEventListener("click", () => {
    refs.franchise.removeAttribute("disabled", "disabled"), toggleModal();
  });
  refs.formFranchise.addEventListener("submit", formFranchise);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  function formFranchise(e) {
    e.preventDefault();
    const { name, phone, email, comment } = e.currentTarget.elements;
    const res = {
      name: name.value,
      phone: phone.value,
      email: email.value,
      comment: comment.value,
    };
    refs.formFranchise.reset();
    console.log(res);
    refs.franchise.removeAttribute("disabled", "disabled");
    toggleModal();
  }
})();
