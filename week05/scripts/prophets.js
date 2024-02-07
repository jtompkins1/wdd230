
//Declare a const variable named "url" that contains the URL string of the JSON resource provided.
const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

//Declare a const variable name "cards" that selects the HTML div element from the document with an id value of "cards".
const cards = document.querySelector("#cards");


//Create a async defined function named "getProphetData" to fetch data from the JSON source url using the await fetch() method.
async function getProphetData() {
    //Store the response from the fetch() method in a const variable named "response".
    const response = await fetch(url);
    
    //Convert the response to a JSON object using the .json method and store the results in a const variable named "data".
    const data = await  response.json();


    //Add a console.table() expression method to check the data response at this point in the console window.
    //console.table(data.prophets); //temporary testing of data retrieval

    //call a function named "displayProphets" and include the "data.prophets" argument. Why do we send data.prophets versus just the data variable? The displayProphets() function expects an array parameter.
    displayProphets(data.prophets);// note that we reference the prophets array of the JSON data object, not just the object

}

//Define a function expression named "displayProphets" that handles a single parameter named "prophets" somewhere in your js file. Use an arrow expression to contain statements that will process the parameter value and build a card for each prophet.
const displayProphets = (prophets) => {
    //Inside the function, use a forEach loop with the array parameter to process each "prophet" record one at a time, creating a new card each time.
    prophets.forEach((prophet) => {
        //create a section element and store it in a variable named card using createElement(),
        let card = document.createElement("section");

        //create an h2 element and store it in a variable named "fullName"
        let fullName = document.createElement("h2");

        //create an img element and store it in a variable named "portrait",
        let portrait = document.createElement("img");

        //birthdate Element
        let birthdate = document.createElement("p");
        //birthplace Element
        let birthplace = document.createElement("p");

        //populate the heading element with the prophet's full name using a template string to build the full name,
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;


        //birthdate Element

        //build the image elements using setAtrribute
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        //Using appendChild() on the section element named "card", add the heading and image elements one at a time.
        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);
        


        //add the section card to the "cards" div that was selected at the beginning of the script file
        cards.appendChild(card);
        
    });
    
}

//Call the function getProphetData() in the main line of your .js code to test the fetch and response
getProphetData();

