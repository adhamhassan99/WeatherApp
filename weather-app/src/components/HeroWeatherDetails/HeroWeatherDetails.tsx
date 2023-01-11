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

type Props = {};

export default function HeroWeatherDetails({}: Props) {
  return (
    <div className="flex h-full flex-col px-14 py-14 justify-between max-sm:items-center">
      <SearchBar />
      <div className="w-64 flex aspect-video">
        <img src={Cloudy} alt="" className="object-scale-down" />
      </div>

      <HeroTemp temp={20} day="monday" time="12:00" />
      <div className="border border-lightGrey"></div>
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
