const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const BASE_URL_ESTIMATION = "https://api.openweathermap.org/data/2.5/forecast";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export const endpoints = {
  GET_WEATHER_DATA: (city) =>
    `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`,

  GET_WEATHER_DATA_ESTIMATION: (city) =>
    `${BASE_URL_ESTIMATION}?q=${city}&appid=${API_KEY}&units=metric`,
};
