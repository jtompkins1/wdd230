//start of banner script

//if day is Monday, Tuesday or Wednesday, display banner

const banner = document.querySelector(".banner");
const bannerBtn = document.querySelector(".banner-close");
let dayOfWeek;


function displayBannerOnDay() {

    getDayDate();
    //console.log("dayOfWeek after getDayDate", dayOfWeek);
    
    if (dayOfWeek !== "Monday" && dayOfWeek !== "Tuesday" && dayOfWeek !==  "Wednesday") {

        banner.style.display = "none";

    } 

};

function getDayDate() {

    const day = new Date();
    const dateObject = new Date(day);
    
    dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dateObject.getDay()];
    
    //dayOfWeek = "Sunday";

    return dayOfWeek;

}

displayBannerOnDay();

//console.log("today is:", dayOfWeek)

bannerBtn.addEventListener("click", () => {
    if (banner) {
        banner.classList.add("hidden");
    }
});