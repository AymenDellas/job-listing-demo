import React from "react";
import jobs from "../jobs.json";
import BrowseJobs from "../components/BrowseJobs";

const JobsPage = () => {
  return (
    <>
      <div className="p-4">
        <div className="flex flex-wrap justify-center">
          <BrowseJobs></BrowseJobs>
        </div>
      </div>
    </>
  );
};

export default JobsPage;
