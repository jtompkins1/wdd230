//load all members on the directory page
const cards = document.querySelector("article");

async function getMemberInfo () {
    const response = await fetch("data/members.json");
    const data = await response.json();

    //test
    //console.table(data.members);
    displayMembers(data.members);

};

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

        cards.appendChild(card);

    });
}

getMemberInfo();



