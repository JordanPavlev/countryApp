const searchButton = document.getElementById("search-button");
const searchCountry = document.getElementById("search-country");
const clearButton = document.getElementById("clear");

searchButton.addEventListener("click", () => {
    let countryName = searchCountry.value;
    let result = document.getElementById("result");
    let endURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(endURL);
    fetch(endURL).then((response) => response.json()).then((data) => {    
        result.innerHTML = `
        <img src='${data[0].flags.svg}' class="flag-img">
        <h2>${data[0].name.common}</h2>
            <div class="text-wrapper">
                <div class="data-wrapper">
                    <h4>Capital:</h4>
                        <span>${data[0].capital[0]}</span>
                </div>
            </div>
            <div class="text-wrapper">
                <div class="data-wrapper">
                    <h4>Continent:</h4>
                        <span>${data[0].continents[0]}</span>
                </div>
            </div>
            <div class="text-wrapper">
                <div class="data-wrapper">
                    <h4>Population:</h4>
                        <span>${data[0].population}</span>
                </div>
            </div>
            <div class="text-wrapper">
                <div class="data-wrapper">
                    <h4>Currency:</h4>
                        <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
                </div>
            </div>
            <div class="text-wrapper">
                <div class="data-wrapper">
                    <h4>Leanguages:</h4>
                        <span>${Object.values(data[0].languages).toString().split(",").join(" + ")}</span>
                </div>
            </div>   
        `

    }).catch(() => {
        if(countryName.length == 0) {
            result.innerHTML = `<h3> Input can't be empty</h3>`;
        }
        else {
            result.innerHTML = `<h3>Please enter a valid country name</h3>`
        }
    })
    
    
});

clearButton.addEventListener("click", () => {
    result.innerHTML = " "
    searchCountry.value = " "
});

