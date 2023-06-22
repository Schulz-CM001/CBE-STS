const itemOne = document.querySelector("#item-1");

function markDone() {
    itemOne.classList.toggle("done");
}
itemOne.addEventListener("click", markDone);



