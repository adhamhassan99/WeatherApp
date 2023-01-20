import React from "react";
import HeroWeatherDetails from "../../components/HeroWeatherDetails/HeroWeatherDetails";
import ExtraWeatherDetails from "../../components/ExtraWeatherDetails/ExtraWeatherDetails";
import { useFetchWeatherData } from "../../services/hooks/useFetchWeatherData";

type Props = {};

const HomeScreen = ({}: Props) => {
  try {
    const { data } = useFetchWeatherData();
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="flex flex-wrap h-screen justify-center">
      <HeroWeatherDetails />
      <ExtraWeatherDetails />
    </div>
  );
};

export default HomeScreen;
