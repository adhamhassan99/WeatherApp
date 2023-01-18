import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import HeroTemp from "../HeroTemp/HeroTemp";
import CountryImageBox from "../CountryImageBox/CountryImageBox";
import WeatherStatus from "../WeatherStatus/WeatherStatus";
import Cloudy from "../../assets/cloudy.png";
import {
  faCloud,
  faCloudShowersHeavy,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

type Props = {};

export default function HeroWeatherDetails({}: Props) {
  return (
    <div className="flex h-full w-1/4 flex-col pl-20 pr-14 py-14 justify-between">
      <SearchBar />
      <div className="w-64 flex aspect-video">
        <img src={Cloudy} alt="" className="object-scale-down" />
      </div>

      <HeroTemp temp={20} day="monday" time="12:00" />
      <div className="border border-lightGrey mr-10"></div>
      <div className="gap-5 flex flex-col">
        <WeatherStatus icon={faCloud} status="cloudy" />
        <WeatherStatus
          icon={faCloudShowersHeavy}
          status="Rain - 30%"
          color="#4050d2"
        />
      </div>
      <CountryImageBox country="new York" />
    </div>
  );
}
