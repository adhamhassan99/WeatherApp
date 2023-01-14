import React from "react";
import HeroWeatherDetails from "../../components/HeroWeatherDetails/HeroWeatherDetails";
import ExtraWeatherDetails from "../../components/ExtraWeatherDetails/ExtraWeatherDetails";
import { Outlet } from "react-router-dom";

type Props = {};

export default function HomeScreen({}: Props) {
  return (
    <div className="flex flex-wrap h-screen justify-center">
      <HeroWeatherDetails />
      <ExtraWeatherDetails />
    </div>
  );
}
