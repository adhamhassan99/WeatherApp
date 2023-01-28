import React from "react";
import { useOutletContext } from "react-router-dom";
import DayWeatherCard from "../DayWeatherCard/DayWeatherCard";
import { useSelector } from "react-redux";
import { days } from "../../fakers/days";

type Props = {};

export default function WeekWeatherDetails({}: Props) {
  const { forecastday } = useSelector(
    (state) => state.temperature.weather.forecast
  );
  const { temp } = useSelector((state) => state.temperature);

  return (
    <div className="flex flex-wrap h-min justify-between">
      {forecastday.map((item) => {
        const date = new Date(item.date_epoch * 1000);
        return (
          <DayWeatherCard
            day={days[date.getDay()].slice(0, 3)}
            high={temp === "c" ? item.day.maxtemp_c : item.day.maxtemp_f}
            low={temp === "c" ? item.day.mintemp_c : item.day.mintemp_f}
            iconUrl={item.day.condition.icon}
          />
        );
      })}
    </div>
  );
}
