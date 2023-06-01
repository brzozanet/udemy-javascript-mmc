// T(F) = T(C) * 1.8 + 32
// T(C) = (T(F) - 32) / 1.8

const numberEl = document.querySelector("#number");
const convBtnEl = document.querySelector(".conv");
const resetBtnEl = document.querySelector(".reset");
const changeBtnEl = document.querySelector(".change");
const resultEl = document.querySelector(".result");
const spanOneEl = document.querySelector(".one");
const spanTwoEl = document.querySelector(".two");

let result = new Number();

function reset() {
  numberEl.value = "";
  resultEl.innerHTML = "";
}

function changeUnit() {
  if (spanOneEl.innerHTML === "°C") {
    spanOneEl.innerHTML = "°F";
    spanTwoEl.innerHTML = "°C";
  } else {
    spanOneEl.innerHTML = "°C";
    spanTwoEl.innerHTML = "°F";
  }
}

function convert() {
  if (spanOneEl.innerHTML === "°C") {
    result = numberEl.value * 1.8 + 32;
    resultEl.innerHTML = result.toFixed(1);
  } else {
    result = (numberEl.value - 32) / 1.8;
    resultEl.innerHTML = result.toFixed(1);
  }
}

convBtnEl.addEventListener("click", convert);
resetBtnEl.addEventListener("click", reset);
changeBtnEl.addEventListener("click", changeUnit);
