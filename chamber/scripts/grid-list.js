//start of directory toggle grid list view

const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display1 = document.querySelector("article");

gridButton.addEventListener("click", () => {
    display1.classList.add("grid");
    display1.classList.remove("list");
});

listButton.addEventListener("click", () => {
    display1.classList.add("list");
    display1.classList.remove("grid");
});