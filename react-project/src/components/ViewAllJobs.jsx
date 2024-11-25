import React from "react";
import { Link } from "react-router-dom";

const ViewAllJobs = () => {
  return (
    <div className="flex justify-center items-center px-4 py-3 font-semibold rounded-md btn btn-primary  text-white w-fit mx-auto my-6">
      <Link to="/jobs" className="text-center">
        View All Jobs
      </Link>
    </div>
  );
};

export default ViewAllJobs;
