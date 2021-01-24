const apikey = "3fd396f291239318cc87dde08c90882e"; 
  

const search = document.querySelector(".search-bar");
search.addEventListener("keypress", setQuery);

function setQuery(e){
  if(e.keyCode == 13){
    getResults(search.value);
    // console.log(search.value)
  }
}

function getResults(query){
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apikey}`)
  .then(data => {
    return data.json();
    // console.log(weather)
   })
    .then(displayResults);
}

function displayResults(data){
  console.log(data)
  // City and country
  document.querySelector("h4").innerHTML= `${data.name}, ${data.sys.country}`;
 
  // Temperature
  let temperature =document.querySelector("h5")
  temperature.innerHTML= Math.round(data.main.temp).toString() + "&deg;C";

  //Description
  document.querySelector("h6").innerHTML = data.weather[0].main;

  //Icon 
  let icon = data.weather[0].icon;
  // let iconUrl = "http://openweathermap.org/img/wn/" + icon + ".png";
  let iconUrl = "http://openweathermap.org/img/wn/" +`${icon}` + ".png";
  document.querySelector("img").src = iconUrl;

  //Feels like
  document.querySelector(".feel").innerHTML = "Feels Like: " +  Math.round(data.main.feels_like) + "&deg;C";

  //Wind
  document.querySelector(".wind").innerHTML = "Wind: " +Math.round(data.wind.speed) + "m/s"



  
  
  
}