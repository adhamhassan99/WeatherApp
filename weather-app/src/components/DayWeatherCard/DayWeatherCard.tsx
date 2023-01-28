import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";
type Props = {
  day: string;
  icon?: string;
  high: number;
  low: number;
  iconUrl?: string;
};

export default function DayWeatherCard({
  day,
  high,
  icon,
  low,
  iconUrl,
}: Props) {
  return (
    <div className="flex flex-col bg-white h-min px-8 py-4 rounded-2xl gap-6 items-center shadow-xl my-2">
      <div className="day capitalize text-xl">{day}</div>
      <img src={iconUrl}></img>
      <div className="flex gap-2 flex-1">
        <div className="text-xl flex">
          {high}
          <div className="border inline-block mt-1 p-0 w-1 h-1 rounded-xl border-black"></div>
        </div>
        <div className="text-xl flex text-secondaryText">
          {low}
          <div className="border-secondaryText border inline-block mt-1 p-0 w-1 h-1 rounded-xl "></div>
        </div>
      </div>
    </div>
  );
}
