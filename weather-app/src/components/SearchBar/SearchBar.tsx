import React from "react";
import HeroTemp from "../HeroTemp/HeroTemp";
// import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";
type Props = {};

export default function SearchBar({}: Props) {
  return (
    <div>
      <div className="flex">
        <input
          type="text"
          className="outline-none placeholder:text-black"
          placeholder="Search for places ..."
        />
        <HeroTemp temp={20} day="monday" time="12" />
      </div>
    </div>
  );
}
