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
    let windDirectionElement = document.querySelector(".wind-direction");
    let windDirection = response.data.wind.degree;

    cityElement.innerHTML = city;
    temperatureElement.innerHTML = temperature;
    weatherDescriptionElement.innerHTML = waetherDescription;
    humidityElement.innerHTML = humidity;
    windSpeedElement.innerHTML = windSpeed;
    weatherIconElement.className = weatherIconName;
    weatherIconElement.src = weatherIconUrl;
    windDirectionElement.style.transform = `rotate(${windDirection}deg)`;

    let now = new Date();
    let dataDate = getDate(now);
    updateDate(dataDate.weekDay, dataDate.time);
  } else {
    alert("Enter an existing city please");
  }
}
function getDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let weekDay = days[date.getDay()];
  let time = `${hours}:${minutes}`;
  let dateData = { weekDay: weekDay, time: time };

  return dateData;
}
function updateDate(day, time) {
  let weekDayElement = document.querySelector(".week-day");
  let timeElement = document.querySelector(".time");

  weekDayElement.innerHTML = day;
  timeElement.innerHTML = time;
}
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
function displayForecast() {
  let weekDays = ["Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastHtml = "";

  weekDays.forEach(function (weekDay) {
    forecastHtml += `
      <div class="weather-forecast-day">
            <div class="weather-forecast-weekday">${weekDay}</div>
            <div class="weather-forecast-icon">
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
                class="rain-day"
              />
            </div>
            <div class="weather-forecast-temperatures">
              <span class="weather-forecast-temperature-max">15º</span>
              <span class="weather-forecast-temperature-min">11º</span>
            </div>
          </div>
    `;
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

let searchFormElement = document.querySelector(".search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Lausanne");
displayForecast();
