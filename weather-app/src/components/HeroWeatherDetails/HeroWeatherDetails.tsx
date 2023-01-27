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
import { useSelector } from "react-redux";
import { days } from "../../fakers/days";

type Props = {};

export default function HeroWeatherDetails({}: Props) {
  const { name, country } = useSelector(
    (state) => state.temperature.weather.location
  );
  const last_updated_epoch = useSelector(
    (state) => state.temperature.weather.location.localtime_epoch
  );
  const { temp_c, temp_f, condition } = useSelector(
    (state) => state.temperature.weather.current
  );
  const date = new Date(last_updated_epoch * 1000);
  const tempMes = useSelector((state) => state.temperature.temp);
  return (
    <div className="flex h-full m-w-1/4 flex-col pl-20 pr-14 py-14 justify-between">
      <SearchBar />
      <div className="w-64 flex aspect-video">
        <img src={Cloudy} alt="" className="object-scale-down" />
      </div>

      <HeroTemp
        temp={tempMes === "c" ? temp_c : temp_f}
        day={days[date.getDay()]}
        time={`${date.getHours()}:${date.getMinutes()}`}
      />
      <div className="border border-lightGrey mr-10"></div>
      <div className="gap-5 flex flex-col">
        <WeatherStatus
          icon={faCloud}
          status={condition.text}
          iconUrl={condition.icon}
        />
        {/* <WeatherStatus
          icon={faCloudShowersHeavy}
          status="Rain - 30%"
          color="#4050d2"
        /> */}
      </div>
      <CountryImageBox city={name} country={country} />
    </div>
  );
}
