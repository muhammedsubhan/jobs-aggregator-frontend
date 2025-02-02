import { Job } from "@/app/components/Card";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface JobsState {
  jobs: Job[];
}

const initialState: JobsState = {
  jobs: [],
};

export const JobsSlice = createSlice({
  name: "Jobs",
  initialState,
  reducers: {
    setJobs: (state, action: PayloadAction<Job[]>) => {
      state.jobs = action.payload;
    },
  },
});

export const { setJobs } = JobsSlice.actions;

export default JobsSlice.reducer;
