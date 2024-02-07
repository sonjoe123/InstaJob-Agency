import React from "react";
import JobList from "./JobList.tsx";
import JobDescription from "./JobDescription.tsx";

const JobPostings = () => {
  return (
    <div className="flex h-screen overflow-hidden">

      <div
        className="w-1/3 "
      >
        <JobList />
      </div>
      <div className="w-2/3">
        <JobDescription />
      </div>
    </div>
  ); 
};

export default JobPostings;
