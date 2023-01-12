import React from "react";
import DayWeatherCard from "../DayWeatherCard/DayWeatherCard";
import { FakeWeather } from "../../fakers/weatherFaker.js";
import MainHeader from "../MainHeader/MainHeader";
type Props = {};

export default function ExtraWeatherDetails({}: Props) {
  return (
    <div className="flex flex-col flex-1 bg-lightGrey px-16 py-14 flex-wrap">
      <MainHeader />
      <div className="flex gap-2 flex-wrap h-min justify-between">
        {FakeWeather.map((item) => {
          return <DayWeatherCard day={item.day} high={15} low={-3} />;
        })}
      </div>
    </div>
  );
}
