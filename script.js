const form = document.querySelector("form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const rememberMeCheckbox = document.querySelector("#checkbox");
const existingButton = document.querySelector("#existing");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;
  const rememberMe = rememberMeCheckbox.checked;

  if (rememberMe) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  alert(`Logged in as ${username}`);
  showButton();
  form.reset();
});

function loginAsSaved() {
  const username = localStorage.getItem("username");
  alert(`Logged in as ${username}`);
  form.reset();
}

function showButton() {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  if (username && password) {
    existingButton.style.display = "block";
  } else {
    existingButton.style.display = "none";
  }
}

existingButton.style.display = "none";
existingButton.addEventListener("click", loginAsSaved);
showButton();
