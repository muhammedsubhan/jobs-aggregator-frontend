import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Job } from "@/app/components/Card";

interface FilterPayload {
  company?: string;
  workType?: string;
  workplaceType?: string;
  location?: string;
}

interface JobsState {
  jobs: Job[];
  filteredJobs: Job[];
  activeFilters: FilterPayload;
}

const initialState: JobsState = {
  jobs: [],
  filteredJobs: [],
  activeFilters: {},
};

export const JobsSlice = createSlice({
  name: "Jobs",
  initialState,
  reducers: {
    setJobs: (state, action: PayloadAction<Job[]>) => {
      state.jobs = action.payload;
      state.filteredJobs = action.payload;
      state.activeFilters = {};
    },
    filterJobs: (state, action: PayloadAction<FilterPayload>) => {
      state.activeFilters = {
        ...state.activeFilters,
        ...action.payload,
      };

      state.filteredJobs = state.jobs.filter((job) => {
        const { company, workType, workplaceType, location } =
          state.activeFilters;

        return (
          (!location || job.location.split(",")[0].trim() === location) &&
          (!company || job.postedBy === company) &&
          (!workType || job.jobsite === workType) &&
          (!workplaceType || job.jobType === workplaceType)
        );
      });
    },
    resetFilters: (state) => {
      state.filteredJobs = state.jobs;
      state.activeFilters = {};
    },
  },
});

export const { setJobs, filterJobs, resetFilters } = JobsSlice.actions;
export default JobsSlice.reducer;
