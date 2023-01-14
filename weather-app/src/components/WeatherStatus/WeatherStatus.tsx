import { IconDefinition } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  status: string;
  icon: IconDefinition;
  color?: string;
};

export default function WeatherStatus({ status, icon, color }: Props) {
  return (
    <div className="flex gap-3 items-center justify-self-start">
      <FontAwesomeIcon color={color} icon={icon} />
      <div className="capitalize">{status}</div>
    </div>
  );
}
