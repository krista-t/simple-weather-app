const apikey = "3fd396f291239318cc87dde08c90882e";
const search = document.querySelector(".search-bar");
const clear = document.querySelector(".close");
window.addEventListener("load", ()=>{clear.classList.add("hide")});
search.addEventListener("keypress", ()=>{clear.classList.remove("hide")})
search.addEventListener("keypress", setQuery);



function setQuery(e) {
  if (e.keyCode == 13) {
    getResults(search.value);
  }
}

function getResults(query) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apikey}`)
    .then(data => {
      return data.json();
    })
    .then(displayResults);
}

function displayResults(data) {
  console.log(data)
  // City and country
  document.querySelector("h4").innerHTML = `${data.name}, ${data.sys.country}`;

  // Temperature
  let temperature = document.querySelector("h5")
  temperature.innerHTML = Math.round(data.main.temp).toString() + "&deg;C";

  //Description
  document.querySelector("h6").innerHTML = data.weather[0].main;

  //Icon 
  let icon = data.weather[0].icon;
  let iconUrl = "http://openweathermap.org/img/wn/" + `${icon}` + ".png";
  document.querySelector("img").src = iconUrl;

  //Feels like
  document.querySelector(".feel").innerHTML = "Feels Like: " + Math.round(data.main.feels_like) + "&deg;C";

  //Wind
  document.querySelector(".wind").innerHTML = "Wind: " + Math.round(data.wind.speed) + "m/s"

}

//Clear search
clear.addEventListener("click", clearSearch);
function clearSearch(e) {
  if (e.target) {
    
    search.value = document.querySelector(".search-bar placeholder");
    document.querySelector("h4").innerHTML = " "
    document.querySelector("h5").innerHTML = " "
    document.querySelector("h6").innerHTML = " "
    document.querySelector("img").src = " "
    document.querySelector(".feel").innerHTML = " "
    document.querySelector(".wind").innerHTML = " "
    clear.classList.add("hide");

  }
}

//Day & Date
const date = new Date();
const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let dayNumber = date.getDay();
let dayName = day[dayNumber];


let today = `${date.getDate().toString()} - ${(date.getMonth()+1).toString()} - ${date.getFullYear().toString()} `
document.querySelector(".date").innerHTML = dayName + ", " + today;