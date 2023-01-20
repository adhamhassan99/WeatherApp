import { mainHttpClient } from "./httpClient";

export default fetchWeatherData = () => {
  return mainHttpClient.get().then((res) => {
    return res.data;
  });
};
