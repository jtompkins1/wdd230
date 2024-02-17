//last visit
//milliseconds per day
const msPerDay = 86400000;
const thisVisit = new Date();

//display elements
const firstVisitMsg = "Welcome! Let us know if you have any questions";
const soonVisitMsg = "Back so soon! Awesome!";

//get item date of last visit to local storage
let visitDate = localStorage.getItem("visitDate-ls");

//calculate days since last visit
let daysSinceVisit = visitDate ? (thisVisit - new Date(visitDate)) / msPerDay : 0;

if (daysSinceVisit !== 0) {

    if (daysSinceVisit > 0 && daysSinceVisit < 1) {
        document.querySelector("#visit-msg").textContent = soonVisitMsg;
    } else if (daysSinceVisit > 1) {
        document.querySelector("#visit-msg").textContent = `You last visited ${Math.floor(daysSinceVisit)} days ago`; 

    } 
} else {
    document.querySelector("#visit-msg").textContent = firstVisitMsg;
    }

//set item date of current visit to local storage
localStorage.setItem("visitDate-ls", theDateToday);


//sidebar date and time
//milliseconds per day
const msToDays = 86400000;
const theDateToday = new Date();

document.querySelector("#today").textContent = theDateToday.toDateString();

document.querySelector("#time").textContent = theDateToday.toLocaleTimeString();