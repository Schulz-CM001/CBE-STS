"use strict";

const redSlider = document.getElementById("redSlider");
const greenSlider = document.getElementById("greenSlider");
const blueSlider = document.getElementById("blueSlider");

const header = document.querySelector("#header");

document.body.style.backgroundColor = "dodgerblue";

window.addEventListener("load", () => {
  document.body, (style.backgroundColor = "dodgerblue");
});

function changeBackgroundColor() {
  const red = parseInt(redSlider.value).toString(16).padStart(2, "0");
  const green = parseInt(greenSlider.value).toString(16).padStart(2, "0");
  const blue = parseInt(blueSlider.value).toString(16).padStart(2, "0");

  const color = "#${red}${green}${blue}";
  //"rbg" + "(" + red + "," + green + "," + blue + ")";

  document.body.style.backGroundColor = color;
}

document.body.addEventListener("input", changeBackgroundColor);

redSlider.addEventListener("input", changeBackgroundColor);
greenSlider.addEventListener("input", changeBackgroundColor);
blueSlider.addEventListener("input", changeBackgroundColor);

changeBackgroundColor();
