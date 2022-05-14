import { createSlice } from "@reduxjs/toolkit";

export const departmentSlice = createSlice({
  name: "department",
  initialState: {
    departmentData: null,
    deptFunctions: null,
  },
  reducers: {
    setDepartmentData: (state, action) => {
      state.departmentData = action.payload;
    },
    setDeptFunctions: (state, action) => {
      state.deptFunctions = action.payload;
    },
  },
});

export const { setDepartmentData, setDeptFunctions } = departmentSlice.actions;

export default departmentSlice.reducer;
