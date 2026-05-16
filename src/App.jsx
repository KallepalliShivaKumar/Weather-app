import { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");

  const [weatherData, setWeatherData] = useState(null);

  async function searchWeather() {
    if (!city) {
      alert("Please enter a city");
      return;
    }

    try {
      const apiKey = "2f56d9e861250eee9d0b7a179000cff3";

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

      const response = await fetch(url);

      const data = await response.json();

      if (data.cod === "404") {
        alert("City not found");
        return;
      }

      setWeatherData(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <h1>Weather Application</h1>

      <input
        type="text"
        id="inputbox"
        placeholder="Enter the city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={searchWeather}>Search</button>

      {weatherData && (
        <div className="weather-card">
          <h2>
            City:
            {weatherData.name}
          </h2>

          <h3>
            Temperature:
            {weatherData.main.temp} °C
          </h3>

          <h3>
            Feels Like:
            {weatherData.main.feels_like} °C
          </h3>

          <h3>
            Humidity:
            {weatherData.main.humidity}%
          </h3>

          <h3>
            Weather:
            {weatherData.weather[0].main}
          </h3>

          <h3>
            Description:
            {weatherData.weather[0].description}
          </h3>

          <h3>
            Wind Speed:
            {weatherData.wind.speed}
          </h3>

          <h3>
            Pressure:
            {weatherData.main.pressure}
          </h3>

          <h3>
            Visibility:
            {weatherData.visibility}
          </h3>

          <h3>
            Country:
            {weatherData.sys.country}
          </h3>
        </div>
      )}
    </div>
  );
}

export default App;
