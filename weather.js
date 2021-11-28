// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi = {
    key: "ad0a1418b852a56cbe9af7653e32e823",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}


const searchInputBox = document.getElementById('input-box');

// Event Listener Function.
searchInputBox.addEventListener('keypress', (event) => {
    
    if(event.keyCode == 13) {
       console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    }

});

// For Weather Report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showWeatherReport);
}

// Show Weather Report
function showWeatherReport(weather){
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('weather');
    weatherType.innerText = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    
    if(weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?clean,weather')";
        tempicon.src = "./icons/sun.png"; 

    } else if(weatherType.textContent == 'Clouds') {

        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?cloudy,weather')";
        tempicon.src = "./icons/cloud.png"; 

    } else if(weatherType.textContent == 'Haze') {

        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?Haze,weather')";
         tempicon.src = "./icons/haze.png"; 

    } else if(weatherType.textContent == 'Smoke') {

        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?smoke,weather')";
        tempicon.src = "./icons/fog.png"; 

    } else if(weatherType.textContent == 'Rain') {
        
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/rain,weather')";
         tempicon.src = "./icons/rainy.png"; 

    } else if(weatherType.textContent == 'Snow') {
        
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?snow,weather')";
        tempicon.src = "./icons/snow.png"; 

    } else if(weatherType.textContent == 'Thunderstorm') {
    
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?Thunderstorm,weather')";
         tempicon.src = "./icons/thunderstorm.png"; 
    } 
}

// For date
function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return ` ${day}, ${date} ${month}, ${year}`;
}