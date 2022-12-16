import { createSlice } from "@reduxjs/toolkit";

export const serviceSlice = createSlice({
  name: "contact",
  initialState: {
    serviceData: [],
    newServiceData: [],
    featuredServiceData: null,
  },
  reducers: {
    setServiceData: (state, action) => {
      state.serviceData = action.payload;
    },
    setNewServiceData: (state, action) => {
      state.newServiceData = action.payload;
    },
    setFeaturedServiceData: (state, action) => {
      state.featuredServiceData = action.payload;
    },
  },
});

export const { setServiceData, setFeaturedServiceData, setNewServiceData } = serviceSlice.actions;

export default serviceSlice.reducer;
