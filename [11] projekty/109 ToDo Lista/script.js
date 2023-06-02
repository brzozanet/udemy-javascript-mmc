let inputElement;
let errorInfoElement;
let addBtnElement;
let ulListElement;
let newTaskElement;
let toolsElement;
let completeBtnElement;
let editBtnElement;
let deleteBtnElement;

function main() {
  prepareDOMElemets();
  prepareDOMEvents();
}

function prepareDOMElemets() {
  inputElement = document.querySelector(".todo-input");
  errorInfoElement = document.querySelector(".error-info");
  addBtnElement = document.querySelector(".btn-add");
  ulListElement = document.querySelector(".todolist ul");
  // completeBtnElement = document.querySelector(".complete");
  // editBtnElement = document.querySelector(".edit");
  // deleteBtnElement = document.querySelector(".delete");
}

function prepareDOMEvents() {
  addBtnElement.addEventListener("click", addNewTask);
  // completeBtnElement.addEventListener("click", completeTask);
  // editBtnElement.addEventListener("click", editTask);
  // deleteBtnElement.addEventListener("click", deleteTask);
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

function markAsCompleted() {}

document.addEventListener("DOMContentLoaded", main);
