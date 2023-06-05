const checkBoxOne = document
  .getElementById("fast")
  .addEventListener("click", checkFunction);

const checkBoxtwo = document
  .getElementById("cheap")
  .addEventListener("click", checkFunction);

const checkBoxThree = document
  .getElementById("good")
  .addEventListener("click", checkFunction);

function checkFunction() {
  const checkBoxOne = document.getElementById("fast");
  const checkBoxTwo = document.getElementById("cheap");
  const checkBoxThree = document.getElementById("good");

  if (checkBoxOne.checked == false && checkBoxThree.checked == false) {
    checkBoxTwo.checked = true;
  }
  if (checkBoxOne.checked == true && checkBoxThree.checked == true) {
    checkBoxTwo.checked = false;
  }
  if (checkBoxOne.checked == true && checkBoxTwo.checked == true) {
    checkBoxThree.checked = false;
  }
  if (checkBoxTwo.checked == true && checkBoxThree.checked == true) {
    checkBoxOne.checked = false;
  }
}
