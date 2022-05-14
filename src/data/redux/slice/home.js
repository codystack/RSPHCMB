import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    buildingCultureData: null,
    healthAccessData: null,
    homeBannerData: null,
  },
  reducers: {
    setBuildingCultureData: (state, action) => {
      state.buildingCultureData = action.payload;
    },
    setHealthAccessData: (state, action) => {
      state.healthAccessData = action.payload;
    },
    setHomeBannerData: (state, action) => {
      state.homeBannerData = action.payload;
    },
  },
});

export const {
  setBuildingCultureData,
  setHealthAccessData,
  setHomeBannerData,
} = homeSlice.actions;

export default homeSlice.reducer;
