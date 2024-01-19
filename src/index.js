function updateWeather(response) {
  console.log(response.data);
  //puis lancer la MAJ du weather
  //lancer maj date
}

function searchCity(city) {
  // faire la recherche API
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
