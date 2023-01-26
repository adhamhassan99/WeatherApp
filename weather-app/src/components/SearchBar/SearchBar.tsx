import React, { useState } from "react";
// import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";
type Props = {};
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setQueryKey } from "../../slices/temperatureSlice";
export default function SearchBar({}: Props) {
  const { queryKey } = useSelector((state) => state.temperature);
  const [value, setValue] = useState(queryKey);
  const dispatch = useDispatch();
  // dispatch(setQueryKey(event.target.value))
  const handleEnter = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      dispatch(setQueryKey(event.target.value));
    }
  };

  return (
    <div>
      <div className="flex border-secondaryText items-center gap-3">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={(event) => handleEnter(event)}
          type="text"
          className="outline-none placeholder:text-black"
          placeholder="Search for places ..."
        />
      </div>
    </div>
  );
}
