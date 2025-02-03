"use client";
import React, { useEffect } from "react";
import SelectComp from "./MUI/SelectComp";
import SelectWorkType from "./MUI/SelectWorkType";
import SelectCompany from "./MUI/SelectCompany";
import Card from "./components/Card";
import SelectLocation from "./MUI/SelectLocation";
import { useGetAllJobsQuery } from "./utils/JobsAPI/jobsApi";
import { filterJobs, setJobs } from "./lib/store/features/JobsSlice";
import { RootState } from "./lib/store/store";
import { useAppDispatch, useAppSelector } from "./lib/hooks";

const Home = () => {
  const dispatch = useAppDispatch();
  const jobs = useAppSelector((state: RootState) => state.Jobs.jobs);
  const filteredJobs = useAppSelector(
    (state: RootState) => state.Jobs.filteredJobs
  );

  const { data, error, isLoading } = useGetAllJobsQuery({});

  console.log(error);

  useEffect(() => {
    if (data) {
      dispatch(setJobs(data));
    }
  }, [dispatch, data]);

  const handleFilterUpdate = (
    filterType: string,
    value: string | undefined
  ) => {
    dispatch(filterJobs({ [filterType]: value }));
  };
  return (
    <div className="flex justify-center min-h-screen py-10">
      <div className="flex flex-col gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold text-green-900">Job Openings</h1>
        </div>
        <div className="flex gap-8">
        <SelectComp jobs={jobs} onFilterChange={(value) => handleFilterUpdate("workplaceType", value)} />
          <SelectWorkType jobs={jobs} onFilterChange={(value) => handleFilterUpdate("workType", value)} />
          <SelectCompany jobs={jobs} onFilterChange={(value) => handleFilterUpdate("company", value)} />
          <SelectLocation jobs={jobs} onFilterChange={(value) => handleFilterUpdate("location", value)} />
        </div>
        <div>
          {isLoading ? (
            <p className="text-xl text-gray-700 font-medium flex items-center justify-center h-screen">
              Scraping jobs, please wait...
            </p>
          ) : (
            filteredJobs?.map((job, index) => (
              <div key={job?.id || index}>
                <Card job={job} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
