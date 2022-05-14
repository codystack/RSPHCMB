import { createSlice } from "@reduxjs/toolkit";

export const aboutSlice = createSlice({
  name: "about",
  initialState: {
    rsphcmbData: null,
    healthCentreData: null,
  },
  reducers: {
    setRSPHCMBData: (state, action) => {
      state.rsphcmbData = action.payload;
    },
    setHealthCentre: (state, action) => {
      state.healthCentreData = action.payload;
    },
  },
});

export const { setRSPHCMBData, setHealthCentre } = aboutSlice.actions;

export default aboutSlice.reducer;
