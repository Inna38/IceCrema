(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-products-menu-open]"),
    closeModalBtn: document.querySelector("[data-products-modal-close]"),
    modal: document.querySelector("[data-products-modal]"),
    products: document.querySelector(".secondary-btn"),
    buyNow: document.querySelectorAll(".primary-btn"),
    form: document.querySelector(".form")
  };
  refs.openModalBtn.forEach((element) => {
    element.addEventListener("click", () => {
      refs.products.setAttribute("disabled", "disabled"),
        refs.buyNow.forEach((el) => {
          el.setAttribute("disabled", "disabled");
        });

      toggleModal();
    });
  });

  refs.closeModalBtn.addEventListener("click", () => {
    refs.products.removeAttribute("disabled", "disabled"),
      refs.buyNow.forEach((el) => {
        el.removeAttribute("disabled", "disabled");
      });
    toggleModal();
  });

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  refs.form.addEventListener("submit", (e) => {
    e.preventDefault()
     const {name, phone, email, comment} = e.currentTarget.elements;
  
   const res = {
     name: name.value,
     phone: phone.value,
     email: email.value,         
    comment: comment.value,
    }
    refs.form.reset()
    console.log(res);
    refs.buyNow.forEach((el) => {
        el.removeAttribute("disabled", "disabled");
      });
    toggleModal()
  })
})();

// =========style======================
(() => {
  const refs = {
    itemGreen: document.querySelector(".item-green"),
    itemYellow: document.querySelector(".item-yellow"),
    itemRed: document.querySelector(".item-red"),
  };

  refs.itemGreen.addEventListener("click", onItemGreenClick);
  refs.itemYellow.addEventListener("click", onItemYellowClick);
  refs.itemRed.addEventListener("click", onItemRedClick);

  function onItemGreenClick() {
    refs.itemGreen.classList.toggle("is-active");
  }

  function onItemYellowClick() {
    refs.itemYellow.classList.toggle("is-active");
  }

  function onItemRedClick() {
    refs.itemRed.classList.toggle("is-active");
  }
})();
