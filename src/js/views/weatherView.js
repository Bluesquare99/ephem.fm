import View from "./View.js";

class WeatherView extends View {
  _parentEl = document.querySelector(".weather-display");

  _generateMarkup() {
    const description = `In ${this._station.city}, the temperature is ${this._weather.main.temp} Fahrenheit.  There are ${this._weather.weather[0].description}.  The wind's blowing at ${this._weather.wind.speed} at direction of ${this._weather.wind.deg} degrees.`;
    const weatherIcon = `http://openweathermap.org/img/wn/03n@2x.png`;

    return `
      <img src="${weatherIcon}" />
      <p>${description}</p>
    `;
  }
}

export default new WeatherView();
