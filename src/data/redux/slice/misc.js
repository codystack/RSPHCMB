import { createSlice } from "@reduxjs/toolkit";

export const miscSlice = createSlice({
  name: "misc",
  initialState: {
    miscData: {},
  },
  reducers: {
    setMisc: (state, action) => {
      state.miscData = action.payload;
    },
  },
});

export const { setMisc } = miscSlice.actions;

export default miscSlice.reducer;
