function updateWeather(response) {
  console.log(response.data);
  if (response.data.city !== undefined) {
    let cityElement = document.querySelector(".city");
    let city = response.data.city;
    let temperatureElement = document.querySelector(
      ".current-temperature-value"
    );
    let temperature = Math.round(response.data.temperature.current);
    let weatherDescriptionElement = document.querySelector(
      ".weather-description"
    );
    let waetherDescription = response.data.condition.description; //Humidity
    let humidityElement = document.querySelector(".humidity");
    let humidity = response.data.temperature.humidity;
    let windSpeedElement = document.querySelector(".wind-speed");
    let windSpeed = Math.round(response.data.wind.speed); //icon
    let weatherIconUrl = response.data.condition.icon_url;
    let weatherIconName = response.data.condition.icon;
    let weatherIconElement = document.querySelector(".current-temperature img");

    cityElement.innerHTML = city;
    temperatureElement.innerHTML = temperature;
    weatherDescriptionElement.innerHTML = waetherDescription;
    humidityElement.innerHTML = humidity;
    windSpeedElement.innerHTML = windSpeed;
    weatherIconElement.className = weatherIconName;
    weatherIconElement.src = weatherIconUrl;
  } else {
    alert("Enter an existing city please");
  }
}

function getDate(date) {}
function updateDate(day, time) {}

function searchCity(city) {
  let apiKey = "c418bef3eo7aacdt413e1d00f5a173c4";
  let unit = "metric";
  let query = city;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(updateWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".form-input");
  let city = searchInput.value.trim().toLowerCase();
  searchCity(city);
}

let searchFormElement = document.querySelector(".search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Lausanne");
