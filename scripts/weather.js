const currentTemp = document.querySelector ("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#desc");
const url = "https://api.openweathermap.org/data/2.5/weather?lat=36.33&lon=-94.10&units=imperial&appid=c7039a0ebd28f4b790d99a40ca9311c5";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            //console.log(data);//for testing
            displayResults(data); //uncomment after testing ok

         } else {
            throw Error(await response.text());
         }

    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    captionDesc.textContent = `${desc}`;
}