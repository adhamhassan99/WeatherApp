import React, { useState } from "react";
// import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";
type Props = {};
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function SearchBar({}: Props) {
  const [value, setValue] = useState("");
  return (
    <div>
      <div className="flex border-secondaryText items-center gap-3">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          type="text"
          className="outline-none placeholder:text-black"
          placeholder="Search for places ..."
        />
      </div>
    </div>
  );
}
