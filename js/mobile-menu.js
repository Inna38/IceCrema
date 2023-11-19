(() => {
  const refs = {
    openBtn: document.querySelector("[data-menu-open]"),
    closeBtn: document.querySelector("[data-menu-close]"),
    menu: document.querySelector("[data-menu]"),
    burgerLink: document.querySelectorAll(".burger__menu-link"),
  };

  refs.openBtn.addEventListener("click", toggleModal);
  refs.closeBtn.addEventListener("click", toggleModal);
  refs.burgerLink.forEach(element => {
  element.addEventListener("click", toggleModal);
  })
      
  function toggleModal(e) {
    document.body.classList.toggle("is-open");
    refs.menu.classList.toggle("is-open");
  }
})();



