function currentTime(){
//tokyo
    let tokyoElement = document.querySelector("#tokyo");
    let tokyoDateElement = tokyoElement.querySelector("#date");
    let tokyoTimeElement = tokyoElement.querySelector("#time");
    let tokyoTime = moment().tz("Asia/Tokyo");
    
    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

    //New York
    let newYorkElement = document.querySelector("#new-york");
    let newYorkDateElement = newYorkElement.querySelector("#date");
    let newYorkTimeElement = newYorkElement.querySelector("#time");
    let newYorkTime = moment().tz("America/New_York");
    
    newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format("h:mm:ss [<small>]A[</small>]");

    //Paris
    let parisElement = document.querySelector("#paris");
    let parisDateElement = parisElement.querySelector("#date");
    let parisTimeElement = parisElement.querySelector("#time");
    let parisTime = moment().tz("Europe/Paris");
    
    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
}

currentTime();
setInterval(currentTime, 1000)
