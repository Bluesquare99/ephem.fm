import * as model from "./model.js";
import { MINUTES } from "./config.js";
import weatherView from "./views/weatherView.js";

const controlStation = async function (station) {
  try {
    // Updates weather given station
    const weather = await model.updateWeather(station);
    model.state.station = station;
    model.state.weather = weather;

    // Periodically checks if weather data is current
    //  If not, updates weather
    async function execute1() {
      while (true) {
        await new Promise((resolve) => setTimeout(resolve, 2 * MINUTES));
        await model.checkWeather(station);
      }
    }

    execute1();

    // Renders weather
    weatherView.render(model.stations[station], weather);
  } catch (err) {
    console.log(err);
  }
};

controlStation("kutx");
