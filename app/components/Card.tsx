import React from "react";

const Card = () => {
  return (
    <div className="bg-white text-white  w-[1000px] min-h-[100px] border-b border-gray-300 pb-3 cursor-pointer">
      <div className=" py-5 px-2 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold text-green-800">
              Associate DevOps Engineer
            </h1>
            <p className="text-sm text-gray-400">Posted 2 Days Ago</p>
          </div>
          <div>
            <p className="font-medium text-black">On-site</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Lahore, Punjab, Pakistan</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Cluster Head</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Full Time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
