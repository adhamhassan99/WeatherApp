import React from "react";
import { useSelector } from "react-redux";

type Props = {
  temp: number;
  day: string;
  time: string;
};

export default function HeroTemp({ temp, day, time }: Props) {
  const tempMes = useSelector((state) => state.temperature.temp);

  return (
    <div className="flex flex-col gap-7">
      <div className="flex">
        <div className="text-9xl">{temp}</div>
        <div className="border-2 mt-5 p-1 w-2 h-2 rounded-xl border-black"></div>
        <div className="text-6xl leading-10 pt-2 mx-2 capitalize">
          {tempMes}
        </div>
      </div>
      <div className="flex">
        <div className="text-3xl capitalize">{day}</div>
        <div className="text-3xl text-secondaryText">, {time}</div>
      </div>
    </div>
  );
}
