"use strict";

const counterLabel = document.getElementById("counter");
const mainSection = document.querySelector("#main");
const resetButton = document.querySelector("button");

let counterValue = 0;
let colorValue = 0;

function counting() {
  counterValue++;
  counterLabel.textContent = counterValue;
  colorValue += 1;

  mainSection.style.backgroundSize = colorValue + "%" + " 100%";

  if (colorValue >= 100) {
    colorValue = 0;
  }
}

mainSection.addEventListener("click", counting);

resetButton.addEventListener("click", () => {
  mainSection.style.backgroundSize = "0% 0%";
  colorValue = 0;
  counterValue = 0;
  counterLabel.textContent = counterValue;
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    counting();
  } else if (event.key === "Space") {
    counting();
  } else {
    return false;
  }
});

/*"use strict";

const counterLabel = document.getElementById("counter");
const mainSection = document.querySelector("#main");
const resetButton = document.querySelector("button");

let counterValue = 0;
let colorValue = 0;

function counting() {
  counterValue++;
  counterLabel.textContent = counterValue;
  colorValue += 1;

  mainSection.style.backgroundSize = colorValue + "%" + " 100%";

  if (colorValue >= 100) {
    colorValue = 0;
  }
}

mainSection.addEventListener("click", counting);

resetButton.addEventListener("click", () => {
  mainSection.style.backgroundSize = "0% 0%";
  colorValue = 0;
  counterValue = 0;
  counterLabel.textContent = counterValue;
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    counting();
  } else if (event.key === "Space") {
    counting();
  } else {
    return false;
  }
});
*/
