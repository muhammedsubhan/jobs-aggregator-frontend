import Link from "next/link";
import React from "react";
export interface Job {
  id: string;
  title: string;
  posted: string;
  location: string;
  jobType: string;
  department: string;
  jobsite: string;
  url: string;
  postedBy: string;
}

interface CardProps {
  job: Job;
}
const Card: React.FC<CardProps> = ({ job }) => {
  return (
    <Link href={job?.url} target="_blank">
      <div className="bg-white text-white  w-[1100px] min-h-[100px] border-b border-gray-300 pb-3 cursor-pointer">
        <div className=" py-5 px-2 flex flex-col gap-2">
          <div className="flex items-center justify-between ">
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-semibold text-green-800  w-72">
                {job.title}
              </h1>
              <p className="text-sm text-gray-400 "> {job.posted}</p>
            </div>
            <div>
              <p className="font-medium text-black "> {job.jobType}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400   w-44"> {job.location}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400   w-44"> {job?.department}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400   w-44"> {job.jobsite}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
