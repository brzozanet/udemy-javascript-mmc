const itemElement = document.querySelector(".item1");
const buttonElement = document.querySelector(".arrow");
const arrowElement = document.querySelector(".fas");

// ====================== 1 ======================

// const toggleImage = () => {
//   itemElement.classList.toggle("hide");
// };

// const changeArrow = () => {
//     arrowElement.classList.toggle("fa-arrow-up");
//     arrowElement.classList.toggle("fa-arrow-down");
// };

// buttonElement.addEventListener("click", toggleImage);
// buttonElement.addEventListener("click", changeArrow);

// ====================== 2 ======================

// const toggleImage = () => {
//   itemElement.classList.toggle("hide");
//   arrowElement.classList.toggle("fa-arrow-up");
//   arrowElement.classList.toggle("fa-arrow-down");
// };

// buttonElement.addEventListener("click", toggleImage);

// ====================== 3 ======================

const toggleImage = () => {
  itemElement.classList.toggle("hide");

  if (itemElement.classList.contains("hide")) {
    arrowElement.style.transform = "rotate(180deg)";
  } else {
    arrowElement.style.transform = "rotate(0deg)";
  }
};

buttonElement.addEventListener("click", toggleImage);
