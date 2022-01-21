import { API_WEATHER_URL, API_WEATHER_KEY } from "./config.js";
import * as helpers from "./helpers.js";

export const state = {
  station: "",
  weather: {},
};

export const stations = {
  fbi: {
    name: "fbi",
    city: "Sydney, Australia",
    coordinates: [-33.5346, 151.12],
  },
  kutx: {
    name: "kutx",
    city: "Austin, Texas, United States of America",
    coordinates: [30.1721, -97.4402],
  },
};

// export const updateStation = function (station) {
//   state.station = station;
//   station.weather = retrieveWeather(station);
// };

export const retrieveWeather = async function (station) {
  try {
    console.log(stations[station]);
    const [lat, lng] = stations[station].coordinates;
    const url = `${API_WEATHER_URL}lat=${lat}&lon=${lng}&appid=${API_WEATHER_KEY}&units=imperial`;

    const data = await fetch(url);
    const { wind } = await data.json();

    // add an updateState method
    const { speed, deg, gust } = wind;
    state.weather.wind = { speed, deg, gust };

    return wind;
  } catch (err) {
    console.error(err);
  }
};

export const updateWind = async function (station) {
  try {
    const prev = state.weather.wind;
    const { speed, deg, gust } = await retrieveWeather(station);

    // Update all at once
    if (prev.speed !== speed) state.weather.wind.speed = speed;
    if (prev.deg !== deg) state.weather.wind.deg = deg;
    if (prev.gust !== gust) state.weather.wind.gust = gust;
    console.log("Wind data updated!");
  } catch (err) {
    console.error("Trouble updating error!");
  }
};
