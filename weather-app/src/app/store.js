import { configureStore } from "@reduxjs/toolkit";
import temperatureReducer from "../slices/temperatureSlice";

export const store = configureStore({
  reducer: {
    temperature: temperatureReducer,
  },
});
