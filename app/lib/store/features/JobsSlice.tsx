import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Job } from "@/app/components/Card";

interface JobsState {
  jobs: Job[];
  filteredJobs: Job[];
}

const initialState: JobsState = {
  jobs: [],
  filteredJobs: [],
};

export const JobsSlice = createSlice({
  name: "Jobs",
  initialState,
  reducers: {
    setJobs: (state, action: PayloadAction<Job[]>) => {
      state.jobs = action.payload;
      state.filteredJobs = action.payload;
    },
    filterJobs: (state, action: PayloadAction<string>) => {
      const company = action.payload;
      if (company) {
        state.filteredJobs = state.jobs.filter(
          (job) => job.postedBy === company
        );
      } else {
        state.filteredJobs = state.jobs;
      }
    },
  },
});

export const { setJobs, filterJobs } = JobsSlice.actions;

export default JobsSlice.reducer;
