const passwordInput = document.querySelector("#password");
const showInfo = document.querySelector(".passinfo");

const passwordButton = document.querySelector("#passbutton");
const passwordInfo = document.querySelector("h2");

const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const checkPassword = () => {
  const password = passwordInput.value;
  console.log(password);
  if (password.length > minValue) {
    if (password.match(letters)) {
      showInfo.textContent = "Hasło nie zawiera cyfr 😐";
      showInfo.style.color = "red";
    }
    if (password.match(numbers)) {
      showInfo.textContent = "Hasło nie zawiera liter 😐";
      showInfo.style.color = "red";
    }
    if (password.match(special)) {
      showInfo.textContent = "Hasło nie zawiera cyfr ani liter 😐";
      showInfo.style.color = "red";
    }
    if (password.match(letters) && password.match(special)) {
      showInfo.textContent = "Hasło nie zawiera cyfr 😐";
      showInfo.style.color = "red";
    }
    if (password.match(numbers) && password.match(special)) {
      showInfo.textContent = "Hasło nie zawiera liter 😐";
      showInfo.style.color = "red";
    }
    if (password.match(letters) && password.match(numbers)) {
      showInfo.textContent = "Hasło w porządku 🙂";
      showInfo.style.color = "green";
    }
    if (
      password.match(letters) &&
      password.match(numbers) &&
      password.match(special)
    ) {
      showInfo.textContent = "Hasło jest idealne 😀";
      showInfo.style.color = "lime";
    }
  } else {
    showInfo.textContent = "Hasło jest za krótkie 🙁";
     showInfo.style.color = "red";    
  }

  if (password === "") {
    showInfo.textContent = "Nie podałeś hasła...";
  }
};

function passwordGenerator() {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let generatedPassword = "";

  for (let i = 0; i <= minValue + 2; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    generatedPassword += charset[randomIndex];
  }

  passwordInfo.textContent = generatedPassword;
}

passwordInput.addEventListener("keyup", checkPassword);
passwordButton.addEventListener("click", passwordGenerator);
