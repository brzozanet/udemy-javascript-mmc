// T(F) = T(C) * 1.8 + 32
// T(C) = (T(F) - 32) / 1.8

const numberEL = document.querySelector("#number");
const convBtnEl = document.querySelector(".conv");
const resetBtnEl = document.querySelector(".reset");
const changeBtnEl = document.querySelector(".change");
const spanCelEl = document.querySelector(".stc");
const spanFarEl = document.querySelector(".stf");

let result;

function reset() {
    numberEL.value = "";
}

resetBtnEl.addEventListener("click", reset);