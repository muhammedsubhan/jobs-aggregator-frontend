"use client";
import React, { useEffect, useState } from "react";
import SelectComp from "./MUI/SelectComp";
import SelectWorkType from "./MUI/SelectWorkType";
import SelectCompany from "./MUI/SelectCompany";
import Card from "./components/Card";
import SelectLocation from "./MUI/SelectLocation";
import { getAllJobs } from "./utils/JobsAPI/jobsApi";
import { setJobs } from "./lib/store/features/JobsSlice";
import { RootState } from "./lib/store/store";
import { useAppDispatch, useAppSelector } from "./lib/hooks";

const Home = () => {
  const dispatch = useAppDispatch();
  const jobs = useAppSelector((state: RootState) => state.Jobs.jobs);
  const filteredJobs = useAppSelector(
    (state: RootState) => state.Jobs.filteredJobs
  );

  const [loading, setLoading] = useState(true);

  console.log(jobs);

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        setLoading(true);
        const res = await getAllJobs();
        dispatch(setJobs(res || []));
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllJobs();
  }, [dispatch]);
  return (
    <div className="flex justify-center min-h-screen ">
      <div className="flex flex-col gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold text-green-900">Job Openings</h1>
        </div>
        <div className="flex gap-8">
          <SelectComp />
          <SelectWorkType />
          <SelectCompany jobs={jobs} />
          <SelectLocation />
        </div>
        <div>
          {loading ? (
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
