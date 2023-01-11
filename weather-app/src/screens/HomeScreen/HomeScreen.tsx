import React from "react";
import HeroWeatherDetails from "../../components/HeroWeatherDetails/HeroWeatherDetails";
import ExtraWeatherDetails from "../../components/ExtraWeatherDetails/ExtraWeatherDetails";

type Props = {};

export default function HomeScreen({}: Props) {
  return (
    <div className="flex flex-wrap">
      <HeroWeatherDetails />
      <ExtraWeatherDetails />
    </div>
  );
}
