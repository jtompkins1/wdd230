// footer info
document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent = new Date(document.lastModified);

//milliseconds per day
const msToDays = 86400000;
const theDateToday = new Date();

//sidebar date and time

document.querySelector("#today").textContent = theDateToday.toDateString();

document.querySelector("#time").textContent = theDateToday.toLocaleTimeString();



