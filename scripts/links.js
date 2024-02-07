const baseURL = "https://jtompkins1.github.io/wdd230/";
const linksURL = "https://jtompkins1.github.io/wdd230/data/links.json";

async function getLinksData () {
    const response = await fetch(linksURL);
    const data = await response.json();

    //test
    console.table(data.links);

    //displayLinks(data.links);
}

getLinksData();