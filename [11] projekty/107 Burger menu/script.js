const burgerEl = document.querySelector(".burger");
const menuBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".fa-times");
const menuEl = document.querySelector("#menu");

function showMenu() {
  menuEl.classList.toggle("active");
  menuBtn.classList.toggle("active");
  menuBtn.classList.toggle("hide");
  closeBtn.classList.toggle("active");
  closeBtn.classList.toggle("hide");
}

burgerEl.addEventListener("click", showMenu);
