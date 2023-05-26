const itemElement = document.querySelector(".item1");
const buttonElement = document.querySelector(".arrow");
const arrowElement = document.querySelector(".fas");

const toggleImage = () => {
  itemElement.classList.toggle("hide");
};

const changeArrow = () => {
    arrowElement.classList.toggle("fa-arrow-up");
    arrowElement.classList.toggle("fa-arrow-down");
};

buttonElement.addEventListener("click", toggleImage);
buttonElement.addEventListener("click", changeArrow);
