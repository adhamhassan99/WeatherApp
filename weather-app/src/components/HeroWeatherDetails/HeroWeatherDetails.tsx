import React from "react";
import SearchBar from "../SearchBar/SearchBar";

type Props = {};

export default function HeroWeatherDetails({}: Props) {
  return (
    <div className="flex flex-col">
      <SearchBar />
    </div>
  );
}
