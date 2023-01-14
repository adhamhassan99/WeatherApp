import React from "react";
import DayWeatherCard from "../DayWeatherCard/DayWeatherCard";
import { useOutletContext } from "react-router-dom";

type Props = {};

export default function TodayWeatherDetails({}: Props) {
  const { FakeWeather } = useOutletContext();

  return (
    <div className="flex h-min justify-center">
      <DayWeatherCard
        day={FakeWeather[0].day}
        high={FakeWeather[0].high}
        low={FakeWeather[0].low}
      />
    </div>
  );
}
