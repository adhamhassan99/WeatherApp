import React from "react";
import HeroWeatherDetails from "../../components/HeroWeatherDetails/HeroWeatherDetails";
import ExtraWeatherDetails from "../../components/ExtraWeatherDetails/ExtraWeatherDetails";
import { useFetchWeatherData } from "../../services/hooks/useFetchWeatherData";
import fetchWeatherData from "../../services/fetchWeatherData";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { setWeatherData } from "../../slices/temperatureSlice";
import { useDispatch, useSelector } from "react-redux";
type Props = {};

const HomeScreen = ({}: Props) => {
  // const loc = navigator.geolocation.getCurrentPosition((pos) =>
  //   console.log(pos)
  // );
  const dispatch = useDispatch();
  const { queryKey } = useSelector((state) => state.temperature);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts", queryKey],
    queryFn: () =>
      axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=f87e3f6eaec34528a9902910231401 &q=${queryKey}&days=7&aqi=no&alerts=no`
      ),
    onSuccess: (data) => {
      dispatch(setWeatherData(data.data));
    },
  });

  if (isLoading) {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap h-screen justify-center">
      <HeroWeatherDetails />
      <ExtraWeatherDetails />
    </div>
  );
};

export default HomeScreen;
