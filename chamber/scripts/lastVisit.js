


const todayDate = new Date();
const lastVisitStored = localStorage.getItem("lastVisit")


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

 const dateString = new Date().toString();


