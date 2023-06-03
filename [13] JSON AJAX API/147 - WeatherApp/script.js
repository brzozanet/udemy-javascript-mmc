const input = document.querySelector("input");
const button = document.querySelector("button");
const cityName = document.querySelector(".city-name");
const warning = document.querySelector(".warning");
const photo = document.querySelector(".photo");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const pressure = document.querySelector(".pressure");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

const API_KEY = "d20d036fdf3bba1616bf1ad118250ff3";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_IMG = "https://openweathermap.org/img/wn/";
const API_LANG = "pl";
const API_UNIT = "metric";

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// https://openweathermap.org/img/wn/10d@2x.png
// https://openweathermap.org/current#geocoding

function getWeather() {
  const city = input.value;
  const url = `${API_URL}?q=${city}&appid=${API_KEY}&units=${API_UNIT}&lang=${API_LANG}`;

  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
      input.value = "";
      warning.innerHTML = "";
      cityName.innerHTML = response.data.name;

      const weatherStatus = Object.assign({}, ...response.data.weather);
      photo.src = `${API_IMG}${weatherStatus.icon}@2x.png`;

      weather.innerHTML =
        response.data.weather[0].description.charAt(0).toUpperCase() +
        response.data.weather[0].description.slice(1).toLowerCase();

      temperature.innerHTML = `${response.data.main.temp.toFixed(0)}°C`;
      pressure.innerHTML = `${response.data.main.pressure.toFixed(0)} hPa`;
      humidity.innerHTML = `${response.data.main.humidity}%`;
      wind.innerHTML = `${response.data.wind.speed.toFixed(0)} m/s`;
    })
    .catch((error) => {
      warning.innerHTML = "Wpisz poprawną nazwe miasta";
      cityName.innerHTML = "";
      photo.src = "./img/unknown.png";
      weather.innerHTML = "";
      temperature.innerHTML = "";
      pressure.innerHTML = "";
      humidity.innerHTML = "";
      wind.innerHTML = "";
    });
}

function sendByEnter(event) {
  if (event.key === "Enter") {
    getWeather();
  }
}

button.addEventListener("click", getWeather);
input.addEventListener("keyup", sendByEnter);
