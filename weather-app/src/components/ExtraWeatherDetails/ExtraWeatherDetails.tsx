import React from "react";
import DayWeatherCard from "../DayWeatherCard/DayWeatherCard";
import MainHeader from "../MainHeader/MainHeader";
import { Outlet } from "react-router-dom";
import { FakeWeather } from "../../fakers/weatherFaker.js";
import Card from "../Card/Card";

type Props = {};

export default function ExtraWeatherDetails({}: Props) {
  return (
    <div className="flex flex-col flex-1 bg-lightGrey px-24 py-14 overflow-y-auto ">
      <MainHeader />
      <Outlet context={{ FakeWeather }} />
      <div className="text-4xl capitalize mt-20">today's highlights</div>
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
            <div className="">aaa</div>
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
