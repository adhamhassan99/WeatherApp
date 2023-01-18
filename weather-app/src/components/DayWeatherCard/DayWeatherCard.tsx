import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCloudSun } from "@fortawesome/free-solid-svg-icons";

type Props = { day: string; icon?: string; high: number; low: number };

export default function DayWeatherCard({ day, high, icon, low }: Props) {
  return (
    <div className="flex flex-col bg-white h-min px-8 py-4 rounded-2xl gap-6 items-center shadow-xl">
      <div className="day capitalize text-2xl">{day}</div>
      <FontAwesomeIcon icon={faCloudSun} />
      <div className="flex gap-1">
        <div className="text-2xl flex">
          {high}
          <div className="border inline-block mt-1 p-0 w-1 h-1 rounded-xl border-black"></div>
        </div>
        <div className="text-2xl flex text-secondaryText">
          {low}
          <div className="border-secondaryText border inline-block mt-1 p-0 w-1 h-1 rounded-xl "></div>
        </div>
      </div>
    </div>
  );
}
