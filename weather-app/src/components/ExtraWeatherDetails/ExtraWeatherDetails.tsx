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
type Props = {
  isLoading?: boolean;
};

export default function ExtraWeatherDetails({ isLoading }: Props) {
  const getHumidityRating = (rating: number) => {
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

  return (
    <div className="flex flex-col flex-1 bg-lightGrey px-24 py-14 h-screen">
      <MainHeader />
      <div className=" overflow-y-auto">
        <Outlet context={{ FakeWeather }} />
        <div className="text-4xl capitalize mt-16">today's highlights</div>
        <div className=" flex-1 mt-10 flex flex-col gap-10">
          <div className="flex justify-between gap-20 flex-1">
            <Card title="UV Index">
              <div className="">{uv}</div>
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
            <Card title="Sunrise & Sunset">
              <div className="">aaa</div>
            </Card>
          </div>
          <div className="flex justify-between flex-1  gap-20">
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
    </div>
  );
}
