import * as model from "./model.js";

const controlWeather = async function (station) {
  // Retrieves weather data from model
  const wind = await model.retrieveWeather(station);

  // Need to give weather data to controller
  console.log("🌬", wind);
};

controlWeather("kutx");
console.log(model.state.weather);
