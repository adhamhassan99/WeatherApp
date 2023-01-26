import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  status: string;
  icon: IconDefinition;
  color?: string;
  iconUrl?: string;
};

export default function WeatherStatus({ status, icon, color, iconUrl }: Props) {
  return (
    <div className="flex gap-3 items-center justify-self-start">
      {iconUrl ? (
        <img className="w-14" src={iconUrl}></img>
      ) : (
        <FontAwesomeIcon color={color} icon={icon} />
      )}
      <div className="capitalize text-xl flex-1">{status}</div>
    </div>
  );
}
