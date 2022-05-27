const API_KEY = config.API_KEY;

function getLocationSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${data.main.temp} / ${data.weather[0].main}`;
      city.innerText = data.name;
    });
}

function getLocationFail() {
  alert("Can't find you. Failed to load the weather");
}

navigator.geolocation.getCurrentPosition(getLocationSuccess, getLocationFail);
