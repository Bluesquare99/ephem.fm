import * as model from "./model.js";
import { MINUTES } from "./config.js";
import weatherView from "./views/weatherView.js";
import audioView from "./views/audioView.js";

const controlStation = async function (station) {
  try {
    // Updates weather given station
    const weather = await model.updateWeather(station);
    model.state.station = station;
    model.state.weather = weather;

    // Periodically checks if weather data is current
    //  If not, updates weather
    //  THERE IS A PACKAGE IN NODE THAT CAN MORE ELEGANTLY HANDLE THIS
    //    Implement once you know noe
    //    https://www.npmjs.com/package/set-interval-async
    async function execute1() {
      while (true) {
        await new Promise((resolve) => setTimeout(resolve, 2 * MINUTES));
        await model.checkWeather(station);
      }
    }

    execute1();

    // Renders weather
    // weatherView.render(model.stations[station], weather);
  } catch (err) {
    console.log(err);
  }
};

controlStation("kutx");

const controlAudio = function (station) {
  url = model.stations[station].streamingUrl;
  const audio = new Audio("url");
  audio.play();
};

const init = function () {
  audioView.addHandlerClick(controlAudio);
};

init();
