import { createSlice } from "@reduxjs/toolkit";

export const serviceSlice = createSlice({
  name: "contact",
  initialState: {
    serviceData: [],
    featuredServiceData: null,
  },
  reducers: {
    setServiceData: (state, action) => {
      state.serviceData = action.payload;
    },
    setFeaturedServiceData: (state, action) => {
      state.featuredServiceData = action.payload;
    },
  },
});

export const { setServiceData, setFeaturedServiceData } = serviceSlice.actions;

export default serviceSlice.reducer;
