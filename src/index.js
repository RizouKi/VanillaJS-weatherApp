function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".form-input");
  let city = searchInput.value.trim().toLowerCase();
  searchCity(city);
}
function searchCity(city) {
  // faire la recherche api
  //puis lancer la MAJ du weather
  //lancer la maj date
}

let searchFormElement = document.querySelector(".search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Lausanne");
