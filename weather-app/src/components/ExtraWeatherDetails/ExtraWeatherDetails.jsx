import React from "react";
import DayWeatherCard from "../DayWeatherCard/DayWeatherCard";
import MainHeader from "../MainHeader/MainHeader";
import { Outlet } from "react-router-dom";
import { FakeWeather } from "../../fakers/weatherFaker.js";
import Card from "../Card/Card";

import {
  UilThumbsUp,
  UilThumbsDown,
  UilFeedback,
  UilArrowUp,
  UilArrowUpLeft,
  UilArrowUpRight,
  UilArrowDown,
  UilArrowDownLeft,
  UilArrowDownRight,
  UilArrowRight,
  UilArrowLeft,
} from "@iconscout/react-unicons";
import { useSelector } from "react-redux";
import UVGaugeChart from "../UVGaugeChart/UVGaugeChart";

export default function ExtraWeatherDetails(isLoading) {
  const getHumidityRating = (rating) => {
    return rating >= 0 && rating <= 20
      ? "low"
      : rating > 20 && rating <= 40
      ? "normal"
      : "high";
  };
  const getIcon = (range) => {
    return range === "low" ? (
      <UilThumbsUp size={25} />
    ) : range === "normal" ? (
      <UilFeedback size={25} />
    ) : (
      <UilThumbsDown size={25} />
    );
  };
  const { humidity, uv, wind_kph, wind_dir } = useSelector(
    (state) => state.temperature.weather.current
  );
  const { sunrise, sunset } = useSelector(
    (state) => state.temperature.weather.forecast.forecastday[0].astro
  );
  const iconMap = {
    N: <UilArrowUp size={40} />,
    S: <UilArrowDown size={40} />,
    E: <UilArrowRight size={40} />,
    W: <UilArrowLeft size={40} />,
    NE: <UilArrowUpRight size={40} />,
    ENE: <UilArrowUpRight size={40} />,
    NNE: <UilArrowUpRight size={40} />,
    NW: <UilArrowUpLeft size={40} />,
    NNW: <UilArrowUpLeft size={40} />,
    WNW: <UilArrowUpLeft size={40} />,
    SE: <UilArrowDownRight size={40} />,
    ESE: <UilArrowDownRight size={40} />,
    SSE: <UilArrowDownRight size={40} />,
    SW: <UilArrowDownLeft size={40} />,
    WSW: <UilArrowDownLeft size={40} />,
    SSW: <UilArrowDownLeft size={40} />,
  };
  // console.log({ x });

  return (
    <div className="flex flex-col flex-1 bg-lightGrey px-24 py-14 h-screen">
      <MainHeader />
      <div className=" overflow-y-auto">
        <Outlet />
        <div className="text-4xl capitalize mt-16 mb-10">
          today's highlights
        </div>
        <div className="flex gap-20 flex-1 justify-center">
          <Card title="UV Index" className="relativ">
            <div className="relative mt-6">
              <UVGaugeChart uv={uv} />
              <div className="absolute bottom-2 left-24 text-6xl">{uv}</div>
            </div>
          </Card>
          <Card title="Wind status">
            <div className="flex gap-2">
              <div className="text-6xl mt-7 font-medium">{wind_kph}</div>
              <div className="mt-12 font-medium text-3xl">km/h</div>
            </div>
            <div className="flex items-center mt-6">
              {iconMap[wind_dir]}
              <div className="font-medium text-3xl">{wind_dir}</div>
            </div>
          </Card>
          <Card title="Sunrise & Sunset" className="flex flex-col gap-5">
            <div className="flex flex-col gap-7">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 box-border rounded-full flex items-center justify-center bg-yellow-400 shadow-inner shadow-yellow-600 ">
                  <UilArrowUp color="white" />
                </div>
                <div className="text-2xl">{sunrise}</div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 box-border rounded-full flex items-center justify-center bg-yellow-400 shadow-inner shadow-yellow-600 ">
                  <UilArrowDown color="white" />
                </div>
                <div className="text-2xl">{sunset}</div>
              </div>
            </div>
          </Card>
          <Card title="Humidity">
            <div className="flex flex-col justify-between h-full">
              <div className="text-5xl flex mt-8">
                {humidity}
                <span className="text-xl font-semibold ml-1">%</span>
              </div>
              <div className="flex items-baseline gap-3">
                <div className="mb-3 text-2xl capitalize">
                  {getHumidityRating(humidity)}
                </div>
                {getIcon(getHumidityRating(humidity))}
              </div>
            </div>
          </Card>
          <Card title="Visibility">
            <div className="">aaa</div>
          </Card>
          <Card title="Air Quality">
            <div className="">aaa</div>
          </Card>
        </div>
      </div>
    </div>
  );
}
