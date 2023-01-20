import fetchWeatherData from "../fetchWeatherData";
import { useQuery } from "@tanstack/react-query";

export const useFetchWeatherData = () => {
  return useQuery({
    queryKey: ["test"],
    queryFn: () => fetchWeatherData(),
  });
};
