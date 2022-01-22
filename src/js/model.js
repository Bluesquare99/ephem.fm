import { API_WEATHER_URL, API_WEATHER_KEY, MINUTES } from "./config.js";
import * as helpers from "./helpers.js";

export const state = {};

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
  cism: {
    name: "cism",
    city: "Montreal, Quebec, Canada",
    coordinates: [45.3023, -73.3644],
  },
};

// export const updateStation = function (station) {
//   state.station = station;
//   station.weather = retrieveWeather(station);
// };

export const retrieveWeather = async function (station) {
  try {
    const [lat, lng] = stations[station].coordinates;
    const url = `${API_WEATHER_URL}lat=${lat}&lon=${lng}&appid=${API_WEATHER_KEY}&units=imperial`;

    const data = await fetch(url);
    const weather = await data.json();
    state.station = station;
    state.weather = weather;

    // add an updateState method
    // const { speed, deg, gust } = wind;
    // state.weather.wind = { speed, deg, gust };

    return weather;
  } catch (err) {
    console.error(err);
  }
};

// export const updateState();

export const updateWeather = function (station) {
  setInterval(updateWeatherData(state, station), 1 * MINUTES);
};

export const updateWeatherData = async function (state, station) {
  try {
    const prev = state;
    const cur = await retrieveWeather(station);

    console.log("prev", prev.weather);
    console.log("cur", cur);
    if (prev != cur) console.log(`Something's fishy!`);
    else console.log("All good here");
    // // Update all at once
    // if (prev.speed !== speed) state.weather.wind.speed = speed;
    // if (prev.deg !== deg) state.weather.wind.deg = deg;
    // if (prev.gust !== gust) state.weather.wind.gust = gust;
    // console.log("Wind data updated!");
  } catch (err) {
    console.error("Trouble updating error!");
  }
};
