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
  popupInfoElement = document.querySelector(".popup-info");
  popupAddBtnElement = document.querySelector(".accept");
  popupCloseElement = document.querySelector(".cancel");
}

function prepareDOMEvents() {
  addBtnElement.addEventListener("click", addNewTask);
  inputElement.addEventListener("keyup", addByEnter);
  ulListElement.addEventListener("click", checkClick);
  popupAddBtnElement.addEventListener("click", saveTask);
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
    editTask(event);
  } else if (event.target.matches(".delete")) {
    deleteTask(event);
  }
}

function editTask(event) {
  popupInfoElement.textContent = "";
  popupElement.style.display = "flex";
  taskToEditElement = event.target.closest("li");
  popupInputElement.value = taskToEditElement.firstChild.textContent;
}

function saveTask(event) {
  if (popupInputElement.value !== "") {
    taskToEditElement.firstChild.textContent = popupInputElement.value;
    popupElement.style.display = "none";
  } else {
    popupInfoElement.textContent = "Nie wpisałeś/aś treści zadania.";
  }
}

function deleteTask(event) {
  event.target.closest("li").remove();
  const allTasks = document.querySelectorAll("li");
  if (allTasks.length === 0) {
    errorInfoElement.textContent = "Brak zadań na liście";
  }
}

function closePopup() {
  popupElement.style.display = "none";
}

function addByEnter(event) {
  if (event.key === "Enter") {
    addNewTask(event);
  }
}

document.addEventListener("DOMContentLoaded", main);
