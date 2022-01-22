import * as model from "./model.js";
import weatherView from "./views/weatherView.js";

const controlWeather = async function (station) {
  // Retrieves weather data from model
  const weather = await model.retrieveWeather(station);

  // Renders weather
  weatherView.render(model.stations[station], weather);
};

controlWeather("fbi");
model.updateWeather("fbi");
