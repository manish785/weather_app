const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body')

// accessing the weather details by passing the city name
async function checkWeather(city){
    const api = '75a146786722d65a54ad3afd791c1165';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`

    const weather_data = await fetch(`${url}`).then(response => response.json());
    console.log(weather_data);

    if(weather_data.cod === `404`){
        location_not_found.style.display = 'flex';
        weather_body.style.display = 'none';
        console.log('error');
        return;
    }
    
    location_not_found.style.display = "none";
    weather_body.style.display = 'flex';

    temperature.innerHTML = `${Math.floor(weather_data.main.temp - 273.15)}`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

    
    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = 'https://media.istockphoto.com/id/512218646/photo/storm-sky-rain.jpg?s=612x612&w=0&k=20&c=RoUDM9BMwqW8NkPXjzAzlDKCHPOmdZhmmeT3jGA2EaM=';
            break;
        case 'Clear':
            weather_img.src = 'https://previews.123rf.com/images/kokoroyuki/kokoroyuki1610/kokoroyuki161000128/65063897-landscape-of-the-clear-sky.jpg';
            break;
        case 'Rain':
            weather_img.src = 'https://cdn1.vectorstock.com/i/1000x1000/22/30/rainclouds-and-rain-in-the-dark-sky-vector-11172230.jpg';
            break;
        case 'Mist':
            weather_img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXdcJ7QSEodBsqEyVEQBQMhmXNBxWlRrKgpIessOkkrQ&s';
            break;
        case 'Fog':
            weather_img.src = 'https://img.freepik.com/premium-photo/mountain-tropical-forest_9563-4201.jpg';
            break;
    }
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
})









