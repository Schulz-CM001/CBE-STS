const clearButton = document.querySelector("button");
const itemOne = document.querySelector("#item-1");

function removeItem() {
    itemOne.innerText = "";
}

clearButton.addEventListener("click", removeItem);

