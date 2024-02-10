const currentTemp = document.querySelector ("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#desc");
const day1 = document.querySelector("#day1");
const day2 = document.querySelector("#day2");
const day3 = document.querySelector("#day3");
const forecast1 = document.querySelector("#forecast1");
const forecast2 = document.querySelector("#forecast2");
const forecast3 = document.querySelector("#forecast3");
const todayWeather = document.querySelector("#todayWeather");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=36.32&lon=-94.10&units=imperial&appid=c7039a0ebd28f4b790d99a40ca9311c5";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=36.32&lon=-94.10&units=imperial&appid=c7039a0ebd28f4b790d99a40ca9311c5";



async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);//for testing
            displayWeatherResults(data); //uncomment after testing ok


         } else {
            throw Error(await response.text());
         }

    } catch (error) {
        console.log(error);
    }
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const forecastData = await response.json();
            console.log(forecastData);//for testing
            displayForecastResults(forecastData); //uncomment after testing ok


         } else {
            throw Error(await response.text());
         }

    } catch (error) {
        console.log(error);
    }

};

apiFetch();

function displayWeatherResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = `${desc}`;

};

function displayForecastResults(forecastData) {
    //get timestamp
    let tsNow = forecastData.list[0].dt;
    let ts1 = forecastData.list[5].dt;
    let ts2 = forecastData.list[13].dt;
    let ts3 = forecastData.list[21].dt;
    
    todayWeather.textContent = getDayDate(tsNow);
    day1.textContent = getDayDate(ts1);
    day2.textContent = getDayDate(ts2);
    day3.textContent = getDayDate(ts3);

    //forecast1
    forecast1.textContent = `${Math.round(forecastData.list[5].main.temp)}°F`;

    //forecast2
    forecast2.textContent = `${Math.round(forecastData.list[13].main.temp)}°F`;
    //forecast3
    forecast3.textContent = `${Math.round(forecastData.list[21].main.temp)}°F`;
};

function getDayDate(timestamp) {

    const dateObject = new Date(timestamp * 1000);
    const month = (dateObject.getMonth() + 1).toString();
    const day = dateObject.getDate().toString();
    const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"][dateObject.getDay()];

    return dateString = `${dayOfWeek} ${month}/${day}`;
};