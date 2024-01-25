const todayDate = new Date();
const dateString = new Date().toString();


//last visit
const lastVisitStored = localStorage.getItem("lastVisit");

if (lastVisitStored === null) {
    document.querySelector("#visit-msg").textContent = "Welcome! Let us know if you have any questions.";
} else {
    const lastVisit = new Date(lastVisitStored);
    let daysSinceVisit = (todayDate - lastVisit) / 84600000;

    if (daysSinceVisit > 0 && daysSinceVisit < 1) {
        document.querySelector("#visit-msg").textContent = "Back so soon! Awesome!"
    } else {
        document.querySelector("#visit-msg").innerHTML = `You last visited ${daysSinceVisit} days ago`;
    }

}

localStorage.setItem("lastVisitStored", daysSinceVisit);


//sidebar date and time

document.querySelector("#today").textContent = todayDate.toDateString();

document.querySelector("#time").textContent = todayDate.toLocaleTimeString();

// footer info
document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent = new Date(document.lastModified);

