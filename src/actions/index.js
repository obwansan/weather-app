import axios from 'axios';

const API_KEY = '51bbacc0962aaa4fe426dbc8ab845ccd';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

// Assign string to a const so it only needs to be updated in one place.
export const FETCH_WEATHER = 'FETCH_WEATHER';

// An action creator returning an action with type FETCH_WEATHER
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  // Do a get request on the URL we have created.
  // axios.get() returns a promise
  const request = axios.get(url);

  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
