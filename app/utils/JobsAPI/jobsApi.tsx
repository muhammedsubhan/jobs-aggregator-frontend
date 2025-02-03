import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  endpoints: (builder) => ({
    getAllJobs: builder.query({
      query: () => "/jobs-scraping/all-jobs",
    }),
  }),
});

export const { useGetAllJobsQuery } = jobsApi;
