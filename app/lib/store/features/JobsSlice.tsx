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
    filterJobs: (
      state,
      action: PayloadAction<{
        company?: string;
        workType?: string;
        workplaceType?: string;
        location?: string;
      }>
    ) => {
      const { company, workType, workplaceType, location } = action.payload;

      state.filteredJobs = state.jobs.filter((job) => {
        return (
          (!company || job.postedBy === company) &&
          (!workType || job.jobsite === workType) &&
          (!workplaceType || job.jobType === workplaceType) &&
          (!location || job.location.split(",")[0].trim() === location)
        );
      });
    },
    resetFilters: (state) => {
      state.filteredJobs = state.jobs;
    },
  },
});

export const { setJobs, filterJobs, resetFilters } = JobsSlice.actions;

export default JobsSlice.reducer;
