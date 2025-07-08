// We get references to the DOM elements
const input = document.getElementById('cityInput');
const btn = document.getElementById('searchBtn');
const result = document.getElementById('result');

btn.addEventListener('click', getWeather);

// Asynchronous function to get and display the weather
async function getWeather() {
  const city = input.value.trim();
  if (!city) return;

  try {
    const res = await fetch(`/weather?city=${city}`);
    const data = await res.json();

    if (data.error) {
      result.innerHTML = `<p>Error: ${data.error}</p>`;
      return;
    }

    // We extract the relevant weather data
    const { main, wind, sys, weather, name } = data;
    const sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString();
    const sunset = new Date(sys.sunset * 1000).toLocaleTimeString();
    const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    // We show the data in the DOM
    result.innerHTML = `
      <h2>Climate in ${name}</h2>
      <img src="${iconUrl}" alt="${weather[0].description}" />
      <p><strong>Temperature:</strong> ${main.temp}°C</p>
      <p><strong>Humidity:</strong> ${main.humidity}%</p>
      <p><strong>Wind:</strong> ${wind.speed} m/s</p>
    `;
  } catch (err) {
    result.innerHTML = `<p>Error getting weather</p>`;
  }
}
