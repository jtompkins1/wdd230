const baseURL = "https://jtompkins1.github.io/wdd230/";
const linksURL = "https://jtompkins1.github.io/wdd230/data/links.json";

const activitiesCard = document.querySelector("#activities");

async function getLinksData () {
    const response = await fetch(linksURL);
    const data = await response.json();

    //test
    //console.table(data.weeks);

    displayLinks(data.weeks);
}


const displayLinks = (weeks) => {
    weeks.forEach((week) => {

        let activities = document.createElement("ul");
        let weekNumbers = document.createElement("li");

        weekNumbers.textContent = `${week.week}:  `;
        activities.appendChild(weekNumbers);

        week.links.forEach((link) => {

            let task = document.createElement("a");

            task.textContent = link.title;
            task.setAttribute("href", baseURL + link.url)

            let taskList = document.createElement("li");
            taskList.appendChild(task);
            activities.appendChild(taskList);

        })
        
        activitiesCard.appendChild(activities);

    });
}

getLinksData();