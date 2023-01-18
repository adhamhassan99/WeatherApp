import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setTempType } from "../../slices/temperatureSlice.js";

export default function MainHeader({}: Props) {
  const { temp } = useSelector((state) => state.temperature);
  const [selectedBtn, SetSelectedBtn] = useState(temp);
  const dispatch = useDispatch();
  type Props = {};
  const handleSelection = (type) => {
    SetSelectedBtn(type);
    dispatch(setTempType(type));
  };

  return (
    <div className="flex mb-14 justify-between items-center">
      <div className="daySelector flex gap-4">
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                  color: "black",
                  fontWeight: "bold",
                  textDecoration: "underline",
                  textUnderlineOffset: 15,
                }
              : {
                  color: "#c5c5c5",
                }
          }
          className="text-3xl"
          to={"today"}
        >
          Today
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                  color: "black",
                  fontWeight: "bold",
                  textDecoration: "underline",
                  textUnderlineOffset: 15,
                }
              : {
                  color: "#c5c5c5",
                }
          }
          className="text-3xl"
          to={"week"}
        >
          Week
        </NavLink>
      </div>
      <div className="flex gap-6">
        <button
          onClick={() => handleSelection("c")}
          className={`text-2xl ${
            selectedBtn === "c" ? "bg-black text-white" : "text-black bg-white"
          }  font-bold  w-14 h-14 rounded-full`}
        >
          <div className="">
            <sup>o</sup> C
          </div>
        </button>
        <button
          onClick={() => handleSelection("f")}
          className={`text-2xl ${
            selectedBtn !== "c" ? "bg-black text-white" : "text-black bg-white"
          }  font-bold  w-14 h-14 rounded-full`}
        >
          <sup>o</sup>F
        </button>
      </div>
    </div>
  );
}
