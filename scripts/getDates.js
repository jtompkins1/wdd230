document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent = new Date(document.lastModified);

//number of visits
const visitsDisplay = document.querySelector(".visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if(numVisits !== 0) {
    visitsDisplay.textContent = numVisits;

} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);