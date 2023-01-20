import axios from "axios";

const baseUrl = "https://www.google.com/";

export const mainHttpClient = axios.create({
  baseURL: baseUrl,
});

const defaultConfig = async (config: any) => {
  config.headers = {};
  return config;
};

mainHttpClient.interceptors.request.use(async (config) => {
  return defaultConfig(config);
});
