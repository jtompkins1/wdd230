const todayDate = new Date();
// const lastVisit = localStorage.getItem("lastVisit")

// localStorage.setItem("lastVisit");

// let daysSinceVisit = (todayDate - lastVisit) / 84600000;

document.querySelector("#today").textContent = todayDate.toDateString();

document.querySelector("#time").textContent = todayDate.toLocaleTimeString();


// if (daysSinceVisit == 0) {
//     document.querySelector("#visit-msg").textContent = "Welcome! Let us know if you have any questions."
// } else if (daysSinceVisit > 0 && daysSinceVisit < 1) {
//     document.querySelector("#visit-msg").textContent = "Back so soon! Awesome!"
// } else {
//     document.querySelector("#visit-msg").innerHTML = `You last visited ${daysSinceVisit} days ago`;
// }


// footer info
document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent = new Date(document.lastModified);

