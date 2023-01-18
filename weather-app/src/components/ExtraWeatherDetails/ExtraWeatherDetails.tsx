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
} from "@iconscout/react-unicons";
type Props = {};

export default function ExtraWeatherDetails({}: Props) {
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

  return (
    <div className="flex flex-col flex-1 bg-lightGrey px-24 py-14 h-screen">
      <MainHeader />
      <div className=" overflow-y-auto">
        <Outlet context={{ FakeWeather }} />
        <div className="text-4xl capitalize mt-16">today's highlights</div>
        <div className=" flex-1 mt-10 flex flex-col gap-10">
          <div className="flex justify-between gap-20 flex-1">
            <Card title="UV Index">
              <div className="">aaa</div>
            </Card>
            <Card title="Wind status">
              <div className="flex gap-2">
                <div className="text-6xl mt-7 font-medium">7.70</div>
                <div className="mt-12 font-medium text-3xl">km/h</div>
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
                  12 <span className="text-xl font-semibold ml-1">%</span>
                </div>
                <div className="flex items-baseline gap-3">
                  <div className="mb-3 text-2xl capitalize">
                    {getHumidityRating(80)}
                  </div>
                  {getIcon(getHumidityRating(10))}
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
