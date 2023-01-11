import React from "react";

type Props = {
  temp: number;
  day: string;
  time: string;
};

export default function HeroTemp({ temp, day, time }: Props) {
  return (
    <div className="flex flex-col">
      <div className="text-3xl">
        {temp}{" "}
        <sup className="text-3xl">
          . <sub>c</sub>
        </sup>{" "}
      </div>
      <div className="flex">
        <div className="text-3xl">{day}</div>
        <div className="text-3xl">{time}</div>
      </div>
    </div>
  );
}
