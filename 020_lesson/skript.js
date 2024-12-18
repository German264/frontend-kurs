async function fetchLocation() {
  // Запрос к API для определения местоположения
  const response = await fetch("https://get.geojs.io/v1/ip/geo.json");
  const locationData = await response.json();

  const { city, latitude, longitude } = locationData;
  console.log(`City: ${city}, Latitude: ${latitude}, Longitude: ${longitude}`);

  document.getElementById("location").innerHTML += `
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Latitude:</strong> ${latitude}</p>
        <p><strong>Longitude:</strong> ${longitude}</p>
    `;

  // Запрос к API для получения погоды
  await fetchWeather(latitude, longitude);
}

async function fetchWeather(latitude, longitude) {
  // Запрос к API для получения погоды
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );
  const weatherData = await response.json();

  // деструктуризация вложенного в data объекта по ключу current_weather
  const { temperature, windspeed, weathercode } = weatherData.current_weather;
  // деструктуризация current_weather_units с переименованием переменных
  const { temperature: tempUnit, windspeed: windUnit } =
    weatherData.current_weather_units;
  console.log(temperature, tempUnit, windspeed, windUnit, weathercode);

  const weatherDescription = decodeWeatherCode(weathercode);

  document.getElementById("weather").innerHTML += `
  <p><strong>Temperature:</strong> ${temperature} ${tempUnit}</p>
  <p><strong>Windspeed:</strong> ${windspeed} ${windUnit}</p>
  <p><strong>Weather:</strong> ${weatherDescription}</p>
  `;
}

function decodeWeatherCode(weathercode) {
  if (weathercode === 0) return "Clear sky";
  if (weathercode === 1) return "Mainly clear";
  if (weathercode === 2) return "Partly cloudy";
  if (weathercode === 3) return "Overcast";
  if (weathercode === 45) return "Fog";
  if (weathercode === 48) return "Depositing rime fog";
  if (weathercode === 51) return "Light drizzle";
  if (weathercode === 53) return "Moderate drizzle";
  if (weathercode === 55) return "Heavy drizzle";
  if (weathercode === 56) return "Light freezing drizzle";
  if (weathercode === 57) return "Heavy freezing drizzle";
  if (weathercode === 61) return "Light rain";
  if (weathercode === 63) return "Moderate rain";
  if (weathercode === 65) return "Heavy rain";
  if (weathercode === 66) return "Light freezing rain";
  if (weathercode === 67) return "Heavy freezing rain";
  if (weathercode === 71) return "Light snow";
  if (weathercode === 73) return "Moderate snow";
  if (weathercode === 75) return "Heavy snow";
  if (weathercode === 77) return "Snow grains";
  if (weathercode === 80) return "Light rain showers";
  if (weathercode === 81) return "Moderate rain showers";
  if (weathercode === 82) return "Heavy rain showers";
  if (weathercode === 85) return "Light snow showers";
  if (weathercode === 86) return "Heavy snow showers";
  if (weathercode === 95) return "Thunderstorm";
  if (weathercode === 96) return "Thunderstorm with light hail";
  if (weathercode === 99) return "Thunderstorm with heavy hail";
  return "Unknown weather condition";
}

fetchLocation();
