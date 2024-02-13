const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

//start of join accordian

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active1");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
};

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




