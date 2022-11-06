const APIKEY = "25b5a734c3c114d02a513f365e352618"; 



function OnGeoSuccess (position) {
    const lat= position.coords.latitude; 
    const lon= position.coords.longitude; 
    console.log("You are at:"+lat+lon); 
    const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`; 
    console.log(url); 
    fetch(url).then(response => response.json()).then(data => {
        const WeatherContainer= document.querySelector("#weather span:first-child"); 
        const NameContainer= document.querySelector("#weather span:last-child"); 

     
        console.log(data.name,data.weather[0].main)

        WeatherContainer.innerText=data.weather[0].main; 
        NameContainer.innerText=data.name; 

        
    }); 

}

function OnGeoFailure () {
    alert("Can't Find Your Location!"); 

}

navigator.geolocation.getCurrentPosition(OnGeoSuccess,OnGeoFailure); 