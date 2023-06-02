let inputElement;
let errorInfoElement;
let addBtnElement;
let ulListElement;
let newTaskElement;
let toolsElement;
let completeBtnElement;
let editBtnElement;
let deleteBtnElement;

let popupElement;
let popupInfoElement;
let taskToEditElement;
let popupInputElement;
let popupAddBtnElement;
let popupCloseElement;

function main() {
  prepareDOMElemets();
  prepareDOMEvents();
}

function prepareDOMElemets() {
  inputElement = document.querySelector(".todo-input");
  errorInfoElement = document.querySelector(".error-info");
  addBtnElement = document.querySelector(".btn-add");
  ulListElement = document.querySelector(".todolist ul");
  popupElement = document.querySelector(".popup");
  popupInputElement = document.querySelector(".popup-input");
  popupAddBtnElement = document.querySelector(".accept");
  popupCloseElement = document.querySelector(".cancel");
}

function prepareDOMEvents() {
  addBtnElement.addEventListener("click", addNewTask);
  ulListElement.addEventListener("click", checkClick);
  popupCloseElement.addEventListener("click", closePopup);
}

function addNewTask() {
  if (inputElement.value !== "") {
    // ulListElement.innerHTML = `
    //   <li>
    //     ${inputElement.value}
    //     <div class="tools">
    //       <button class="complete"><i class="fas fa-check"></i></button>
    //       <button class="edit">EDIT</button>
    //       <button class="delete"><i class="fas fa-times"></i></button>
    //     </div>
    //   </li>
    // `;
    newTaskElement = document.createElement("li");
    newTaskElement.textContent = inputElement.value;

    createToolsArea();

    ulListElement.append(newTaskElement);
    inputElement.value = "";
    errorInfoElement.textContent = "";
  } else {
    errorInfoElement.textContent = "Nie wpisałeś/aś treści zadania.";
  }
}

function createToolsArea() {
  toolsElement = document.createElement("div");
  toolsElement.classList.add("tools");

  completeBtnElement = document.createElement("button");
  completeBtnElement.classList.add("complete");
  completeBtnElement.innerHTML = `<i class="fas fa-check"></i>`;

  editBtnElement = document.createElement("button");
  editBtnElement.classList.add("edit");
  editBtnElement.innerHTML = `EDIT`;

  deleteBtnElement = document.createElement("button");
  deleteBtnElement.classList.add("delete");
  deleteBtnElement.innerHTML = `<i class="fas fa-times"></i>`;

  toolsElement.append(completeBtnElement, editBtnElement, deleteBtnElement);
  newTaskElement.append(toolsElement);
}

function checkClick(event) {
  if (event.target.matches(".complete")) {
    event.target.closest("li").classList.add("completed");
    event.target.classList.add("completed");
  } else if (event.target.matches(".edit")) {
    popupElement.style.display = "block";
  } else if (event.target.matches(".delete")) {
    event.target.closest("li").remove();
  }
}

function editTask() {

};

function closePopup() {
  popupElement.style.display = "none";
}

document.addEventListener("DOMContentLoaded", main);
