import React from "react";
import { useOutletContext } from "react-router-dom";
import DayWeatherCard from "../DayWeatherCard/DayWeatherCard";

type Props = {};

export default function WeekWeatherDetails({}: Props) {
  const { FakeWeather } = useOutletContext();
  return (
    <div className="flex gap-2 flex-wrap h-min justify-between">
      {FakeWeather.map((item) => {
        return (
          <DayWeatherCard
            day={item.day.slice(0, 3)}
            high={item.high}
            low={item.low}
          />
        );
      })}
    </div>
  );
}
