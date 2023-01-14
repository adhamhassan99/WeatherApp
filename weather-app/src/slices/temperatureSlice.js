import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  temp: "c",
};

export const temperatureSlice = createSlice({
  name: "temperature",
  initialState,
  reducers: {
    setTempType: (state, action) => {
      state.temp = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTempType } = temperatureSlice.actions;

export default temperatureSlice.reducer;
