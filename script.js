const password = document.querySelector("#password");
const confirmedPassword = document.querySelector("#confirm-password");
const confirmation = document.querySelector(".confirmation");

const errorMessage = document.createElement("p");
errorMessage.style.color = "red";
errorMessage.style.fontSize = "0.9rem";
confirmation.appendChild(errorMessage);

function comparePasswords() {
  if (password.value != confirmedPassword.value) {
    errorMessage.textContent = "Passwords do not match!";
  } else {
    errorMessage.textContent = "";
  }
}

confirmedPassword.addEventListener("input", comparePasswords);
