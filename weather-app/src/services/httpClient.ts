import axios from "axios";

const baseUrl = "https://www.google.com/";

export const mainHttpClient = axios.create({
  baseURL: baseUrl,
});

const defaultConfig = async (config: any) => {
  config.headers = {
    "Content-Type": "aplication/json",
    "Accept-Language": "en-US,en;q=0,ar-EG;q=0.8,ar,q=0.7",
  };
  return config;
};

mainHttpClient.interceptors.request.use(async (config) => {
  return defaultConfig(config);
});
