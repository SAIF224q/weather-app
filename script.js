const apiKey = '002c2f3f1c7cf9ec02ffbc0fd1be62b1';

function getWeather() {
    const cityInput = document.getElementById('city');
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');

    const city = cityInput.value;

    // Check if the user entered a city
    if (city.trim() === '') {
        alert('Please enter a city name.');
        return;
    }
    // Fetch weather data from OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            // Update the DOM with weather information
            locationElement.textContent = `Weather in ${data.name}, ${data.sys.country}`;
            temperatureElement.textContent = `Temperature: ${Math.round(data.main.temp - 273.15)}°C`;
            // Add more information as needed
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again.');
        });
}
