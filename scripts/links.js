const baseURL = "https://jtompkins1.github.io/wdd230/";
const linksURL = "https://jtompkins1.github.io/wdd230/data/links.json";



async function getLinksData () {
    const response = await fetch(linksURL);
    const data = await response.json();

    //test
    //console.table(data.weeks);

    displayLinks(data.weeks);
}


const displayLinks = (weeks) => {
    weeks.forEach((week) => {

        let activitiesCard = document.querySelector("#activities");

        let weekNumbers = document.createElement("li");

        weekNumbers.textContent = `${week.week}:  `;
        activitiesCard.appendChild(weekNumbers);

        week.links.forEach((link) => {

            let task = document.createElement("a");

            task.textContent = link.title;
            task.setAttribute("href", link.url)

            let divider = document.createElement("span");
            divider.textContent = " | ";


            weekNumbers.appendChild(task);
            weekNumbers.appendChild(divider);

        })
        

    });
}

getLinksData();