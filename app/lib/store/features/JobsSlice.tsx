import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const JobsSlice = createSlice({
  name: "Jobs",
  initialState,
  reducers: {},
});

export const {} = JobsSlice.actions;

export default JobsSlice.reducer;
