const buttonUpEl = document.querySelector(".sizeUp");
const buttonDownEl = document.querySelector(".sizeDown");
const buttonColorEl = document.querySelector(".color");
const buttonResetEl = document.querySelector(".reset");
const textEl = document.querySelector("p");

let fontSize = parseInt(window.getComputedStyle(textEl).fontSize);

const changeFontSizeUp = () => {
  if (fontSize < 60) {
    fontSize += 2;
    textEl.style.fontSize = `${fontSize}px`;
  } else {
    return;
  }
};

const changeFontSizeDown = () => {
  if (fontSize > 16) {
    fontSize -= 2;
    textEl.style.fontSize = `${fontSize}px`;
  } else {
    return;
  }
};

const changeColor = () => {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  textEl.style.color = `#${color}`;
};

const resetValues = () => {
  fontSize = 32;
  textEl.style.fontSize = `${fontSize}px`;
  textEl.style.color = `#fff`;
};

buttonUpEl.addEventListener("click", changeFontSizeUp);
buttonDownEl.addEventListener("click", changeFontSizeDown);
buttonColorEl.addEventListener("click", changeColor);
buttonResetEl.addEventListener("click", resetValues);
