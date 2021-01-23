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
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${query}&appid=3fd396f291239318cc87dde08c90882e`)
  .then(weather => {
    return weather.json();
    // console.log(weather)
   })
    .then(displayResults);
}

function displayResults(weather){
  console.log(weather)
}