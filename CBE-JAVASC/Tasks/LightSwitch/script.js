//erste Konstante = body
const body = document.body;
//zweite Konstante = button
const btn = document.querySelector("#button");
//dritte Konstante = Titel
const pageTitle = document.querySelector("#pageTitle");

btn.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  btn.classList.toggle("dark-btn");
  if (body.classList.contains("dark-mode")) {
    pageTitle.textContent = "Good Night";
  } else pageTitle.textContent = "Good Morning";
});
