import React, { useState } from "react";
// import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";
type Props = {};
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { setQueryKey } from "../../slices/temperatureSlice";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
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

  const { data, isLoading, isError } = useQuery({
    queryKey: ["autoComp", value],
    queryFn: () =>
      axios.get(
        `http://api.weatherapi.com/v1/search.json?key=f87e3f6eaec34528a9902910231401&q=${value}`
      ),
    onSuccess: (data) => {
      console.log(data);
    },
  });

  const handleChange = (searchString: string) => {
    setValue(searchString);
  };

  return (
    <div>
      <div className="flex border-secondaryText items-center gap-3">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input
          value={value}
          onChange={(event) => handleChange(event.target.value)}
          onKeyDown={(event) => handleEnter(event)}
          type="text"
          className="outline-none placeholder:text-black"
          placeholder="Search for places ..."
        />
      </div>
    </div>
  );
}
