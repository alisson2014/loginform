const inputPassword = document.getElementById("password");
const buttonVisibility = document.getElementById("eye");
buttonVisibility.addEventListener("click", function () {
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
  } else {
    inputPassword.type = "password";
  }
});