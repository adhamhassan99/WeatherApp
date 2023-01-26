import React from "react";
import DayWeatherCard from "../DayWeatherCard/DayWeatherCard";
import { days } from "../../fakers/days";
import { useSelector } from "react-redux";

export default function TodayWeatherDetails() {
  const { forecastday } = useSelector(
    (state) => state.temperature.weather.forecast
  );
  const { temp } = useSelector((state) => state.temperature);
  const item = forecastday[0];
  const date = new Date(item.date_epoch * 1000);

  return (
    <div className="flex h-min justify-center">
      <DayWeatherCard
        day={days[date.getDay()].slice(0, 3)}
        high={temp === "c" ? item.day.maxtemp_c : item.day.maxtemp_f}
        low={temp === "c" ? item.day.mintemp_c : item.day.mintemp_f}
        iconUrl={item.day.condition.icon}
      />
    </div>
  );
}
