let map; // Declare map outside the function to keep track of the map instance

getWeather = () => {
  var unos = document.getElementById("search");
  var inputValue = String(unos.value);
  const mapElement = document.getElementById("map");

  const city = document.getElementById("city");
  const temperature = document.getElementById("temp");
  const weatherDescription = document.getElementById("description");
  const windSpeed = document.getElementById("wind");
  const pressureValue = document.getElementById("pressure");
  const humidityValue = document.getElementById("humidity");
  const errorDiv = document.getElementById("error");

  const url = `http://api.openweathermap.org/data/2.5/weather?q=${inputValue},CRO&APPID=21b14aefd2b979687909f9afa337dd47&units=metric`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Invalid input. Please enter a valid city name.");
      }
      return response.json();
    })
    .catch(function (error) {
      city.innerHTML = "";
      temperature.innerHTML = "";
      weatherDescription.innerHTML = "";
      windSpeed.innerHTML = "";
      pressureValue.innerHTML = "";
      humidityValue.innerHTML = "";
      errorDiv.innerHTML = error.message; // Display error message
      mapElement.style.display = "none";
      console.log(error);
    });

  async function logWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&APPID=21b14aefd2b979687909f9afa337dd47&units=metric`
    );
    const info = await response.json();

    var name = info.name;
    var temp = info.main.temp;
    var description = info.weather[0].description;
    var wind = info.wind.speed;
    var pressure = info.main.pressure;
    var humidity = info.main.humidity;
    var longitude = info.coord.lon;
    var latitude = info.coord.lat;

    city.innerHTML = "City: " + name;
    temperature.innerHTML = "Temperature: " + temp + "°C";
    weatherDescription.innerHTML = "Description: " + description;
    windSpeed.innerHTML = "Wind speed: " + wind + " m/s";
    pressureValue.innerHTML = " Pressure: " + pressure + " Pa";
    humidityValue.innerHTML = "Humidity: " + humidity + " g/m3";
    errorDiv.innerHTML = "";
    mapElement.style.display = "flex";

    //map with latitude and longitude from a town user inputed
    if (!map) {
      map = L.map("map", { attributionControl: false }).setView([latitude, longitude], 14);

      const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);
    } else {
      map.setView([latitude, longitude], 14);
    }

    const marker = L.marker([latitude, longitude]).addTo(map).openPopup();
  }
  logWeather();
};
