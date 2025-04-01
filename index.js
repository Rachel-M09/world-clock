function currentTime(){
//tokyo
    let tokyoElement = document.querySelector("#tokyo");
    if(tokyoElement){
    let tokyoDateElement = tokyoElement.querySelector("#date");
    let tokyoTimeElement = tokyoElement.querySelector("#time");
    let tokyoTime = moment().tz("Asia/Tokyo");
    
    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
    }
    //New York
    let newYorkElement = document.querySelector("#new-york");
    if (newYorkElement) {
    
    let newYorkDateElement = newYorkElement.querySelector("#date");
    let newYorkTimeElement = newYorkElement.querySelector("#time");
    let newYorkTime = moment().tz("America/New_York");
    
    newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format("h:mm:ss [<small>]A[</small>]");
    }
    //Paris
    let parisElement = document.querySelector("#paris");
    if (parisElement) {

    let parisDateElement = parisElement.querySelector("#date");
    let parisTimeElement = parisElement.querySelector("#time");
    let parisTime = moment().tz("Europe/Paris");
    
    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}
}

function showSelectedCity(event){
let cityTimeZone = event.target.value;
if(cityTimeZone === "current") {
   cityTimeZone = moment.tz.guess();
}
let cityName = cityTimeZone.replace("_", " ").split("/")[1];
let cityTime = moment().tz(cityTimeZone);
let cities = document.querySelector("#city-container")

cities.innerHTML = 
`<div id="tokyo">
<div  class="city-content">
<h2 id="city">${cityName} <small>🇯🇵</small></h2>
<div id="time">${cityTime.format("MMMM	Do YYYY")}</div>
</div>
<div id="date">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
</div>
<div>
<a href="/" id="link">Back To Home</a>
</div>
`
}

currentTime();
setInterval(currentTime, 1000)

let selectElement = document.querySelector("#cities");
selectElement.addEventListener("change", showSelectedCity)