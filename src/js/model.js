import { API_WEATHER_URL, API_WEATHER_KEY, MINUTES } from "./config.js";
import * as helpers from "./helpers.js";

export const state = {};

export const stations = {
  fbi: {
    name: "fbi",
    city: "Sydney, Australia",
    coordinates: [-33.5346, 151.12],
    streamingUrl: "https://streamer.fbiradio.com/stream",
  },
  kutx: {
    name: "kutx",
    city: "Austin, Texas, United States of America",
    coordinates: [30.1721, -97.4402],
    streamingUrl: "https://kut.streamguys1.com/kutx-web",
  },
  cism: {
    name: "cism",
    city: "Montreal, Quebec, Canada",
    coordinates: [45.3023, -73.3644],
    streamingUrl: "https://stream03.ustream.ca/cism128.mp3",
  },
};

export const updateWeather = async function (station) {
  try {
    const [lat, lng] = stations[station].coordinates;
    const url = `${API_WEATHER_URL}lat=${lat}&lon=${lng}&appid=${API_WEATHER_KEY}&units=imperial`;

    const data = await fetch(url);
    const weather = await data.json();

    return weather;
  } catch (err) {
    console.error(err);
  }
};

export const checkWeather = async function (station) {
  try {
    console.log("Checking weather!");
    const needsUpdate = false;

    const prev = state;
    console.log("prev", prev.weather);
    const cur = await updateWeather(state.station);
    console.log("cur", cur);

    if (
      prev.weather.wind.speed !== cur.wind.speed ||
      prev.weather.wind.dir !== cur.wind.dir ||
      prev.weather.main.temp !== cur.main.temp ||
      prev.weather.weather[0].description !== cur.weather[0].description
    ) {
      console.log("Changing now");
      needsUpdate = true;
    } else console.log(`They were same at ${Date.now()}`);

    return needsUpdate;
  } catch (err) {
    console.error(err);
  }
};
