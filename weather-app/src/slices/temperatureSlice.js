import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  temp: "c",
  queryKey: "Egypt",
  weather: null,
  isLoading: false,
};

export const temperatureSlice = createSlice({
  name: "temperature",
  initialState,
  reducers: {
    setTempType: (state, action) => {
      state.temp = action.payload;
    },
    setWeatherData: (state, action) => {
      state.weather = action.payload;
    },
    setQueryKey: (state, action) => {
      state.queryKey = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTempType, setWeatherData, setQueryKey, setLoading } =
  temperatureSlice.actions;

export default temperatureSlice.reducer;
