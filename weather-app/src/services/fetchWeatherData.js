import { mainHttpClient } from "./httpClient";

export default fetchWeatherData = {
  getWeatherData: () =>
    mainHttpClient.get().then((res) => {
      return res.data;
    }),
};
