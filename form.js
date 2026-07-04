
const form = document.querySelector('.auth-form');
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

form.addEventListener('submit', function (event) {

  if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {

    event.preventDefault();

    alert("Empty !!");
  }
});
