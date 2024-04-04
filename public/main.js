const weatherDisplay = document.querySelector('.weather')
const weatherForm = document.querySelector('#weather-form')
const cityInput = document.querySelector('#city-input')

// Fetch weather data from API
const fetchWeather = async (city) =>
{
    const url = `/api?q=${city}`;
    
    const res = await fetch(url)
    const data = await res.json()
    
    if(data.cod == '404'){
        alert("City not found")
        return
    }
}