"use client";
import React, { useEffect, useState } from "react";
import SelectComp from "./MUI/SelectComp";
import SelectWorkType from "./MUI/SelectWorkType";
import SelectCompany from "./MUI/SelectCompany";
import Card from "./components/Card";
import SelectLocation from "./MUI/SelectLocation";
import { getAllJobs } from "./utils/JobsAPI/jobsApi";

const Home = () => {
  const [jobs, setJobs] = useState({ devsincJobs: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        setLoading(true);
        const res = await getAllJobs();
        setJobs(res || { devsincJobs: [] });
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllJobs();
  }, []);

  return (
    <div className="flex justify-center min-h-screen border-2 border-red-700">
      <div className="flex flex-col gap-10 border-2 border-red-500 items-center">
        <div>
          <h1 className="text-4xl font-bold text-green-900">Job Openings</h1>
        </div>
        <div className="flex gap-8">
          <SelectComp />
          <SelectWorkType />
          <SelectCompany />
          <SelectLocation />
        </div>
        <div>
          {loading ? (
            <p className="text-xl text-gray-700 font-medium flex items-center justify-center h-screen">
              Scraping jobs, please wait...
            </p>
          ) : (
            jobs?.map((job, index) => (
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
