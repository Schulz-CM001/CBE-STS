const passWordInput = document.querySelector("#password");

const revealButton = document.querySelector("#button");

revealButton.addEventListener("click", function () {
  passWordInput.classList.toggle("show");

  if (passWordInput.classList.contains("show")) {
    revealButton.textContent = "Hide Password";
    passWordInput.type = "text";
  } else {
    revealButton.textContent = "Show Password";
    passWordInput.type = "password";
  }
});
