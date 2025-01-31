import React from "react";
import SelectComp from "./MUI/SelectComp";
import SelectWorkType from "./MUI/SelectWorkType";
// import Card from "./components/Card";

const Home = () => {
  return (
    <div className="flex justify-center h-screen border-2 border-red-700">
      <div className="flex flex-col gap-10 border-2 border-red-500 items-center ">
        <div>
          <h1 className="text-4xl font-bold text-green-900">Job Openings</h1>
        </div>
        <div className="flex gap-5">
          <SelectComp />
          <SelectWorkType />
        </div>
      </div>
    </div>
  );
};

export default Home;
