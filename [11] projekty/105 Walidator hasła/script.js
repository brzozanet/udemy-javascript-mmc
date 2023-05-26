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
    // showInfo.textContent = "Hasło w porządku 🙂";
    if (password.match(letters)) {
      showInfo.textContent = "Hasło nie zawiera cyfr 😐";
    }
    if (password.match(numbers)) {
      showInfo.textContent = "Hasło nie zawiera liter 😐";
    }
    if (password.match(special)) {
      showInfo.textContent = "Hasło nie zawiera cyfr ani liter 😐";
    }
    if (password.match(letters) && password.match(special)) {
      showInfo.textContent = "Hasło nie zawiera cyfr 😐";
    }
    if (password.match(numbers) && password.match(special)) {
      showInfo.textContent = "Hasło nie zawiera liter 😐";
    }
    if (password.match(letters) && password.match(numbers)) {
      showInfo.textContent = "Hasło w porządku 🙂";
    }
    if (
      password.match(letters) &&
      password.match(numbers) &&
      password.match(special)
    ) {
      showInfo.textContent = "Hasło jest idealne 😀";
    }
  } else {
    showInfo.textContent = "Hasło jest za krótkie 🙁";
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
