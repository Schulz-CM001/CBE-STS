"use strict";

// Jimmy's Code//

const redSlider = document.querySelector("#redSlider");
const greenSlider = document.querySelector("#greenSlider");
const blueSlider = document.querySelector("#blueSlider");

const root = document.querySelector(":root");

function changeBackgroundColor() {
  const red = redSlider.value;
  const green = greenSlider.value;
  const blue = blueSlider.value;

  const color = "rbg" + "(" + red + "," + green + "," + blue + ")";

  root.style.setProperty("...newColor", color);
  document.querySelector("#hexcode").innerText = color;

  changeBackgroundColor();

  document.body.addEventListener("input", changeBackgroundColor);
}
