//On the home page use your JSON data source of members to supply two to three 'spotlight' advertisements for the chamber members who have silver or gold membership levels only.
//The home page should randomly load different, qualified members.
const spotlights = document.querySelector("#sl-container");

async function getMemberInfo () {
    const response = await fetch("data/members.json");
    const data = await response.json();

    //test
    //console.table(data.members);

    const filteredMembers = data.members.filter((member) => member.level === "Silver" || member.level === "Gold");

    const spotlightCards = getRandom(filteredMembers, 3);

    displayMembers(spotlightCards);

};

function getRandom(array, count) {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
}

const  displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");


        let companyName = document.createElement("h3");

        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        let logo = document.createElement("img");
        let level = document.createElement("p");
        let category = document.createElement("p");
        let joinDate = document.createElement("p");

        companyName.textContent = member.companyName;
        address.textContent = member.address;
        phone.textContent = member.phone;
        website.textContent = member.url;
        website.setAttribute("href", member.url)
        logo.setAttribute("src", `images/${member.img}`);
        logo.setAttribute("alt", companyName)
        level.textContent = `Membership Level: ${member.level}`;

        category.textContent = `Category: ${member.category}`;
        joinDate.textContent = `Member Since: ${member.joinDate}`;

        card.appendChild(companyName);
        card.appendChild(logo);
        card.appendChild(category);

        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(level);


        card.appendChild(joinDate);
        card.appendChild(website);

        spotlights.appendChild(card);
        
    });
}

        getMemberInfo();