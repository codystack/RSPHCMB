import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contactData: null,
  },
  reducers: {
    setContactData: (state, action) => {
      state.contactData = action.payload;
    },
  },
});

export const { setContactData } = contactSlice.actions;

export default contactSlice.reducer;
