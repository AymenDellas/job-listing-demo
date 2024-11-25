import React from "react";
import { Link } from "react-router-dom";

const CardsC = () => {
  return (
    <div className="flex justify-center items-center p-10 h-[30vh]  ">
      <div className="card bg-primary-content transition duration-100 rounded-lg border border-[#64646480] w-1/3 mx-5 p-8 hover:drop-shadow-md text-white">
        <h2 className="font-bold text-xl ">For Developers</h2>
        <h4 className="my-5">
          Browse our React jobs and start your career today
        </h4>
        <Link
        
          to="/jobs"
          className="btn-primary btn cursor-pointer font-bold text-white  py-2 px-4 rounded "
        >
          Browse Jobs
        </Link>
      </div>
      <div className="card bg-primary-content transition duration-100 rounded-lg border border-[#64646480] w-1/3 mx-5 p-8 hover:drop-shadow-md text-white">
        <h2 className="font-bold text-xl">For Employers</h2>
        <h4 className="my-5">
          List your job to find the perfect developer for the role
        </h4>
        <Link
          to="/add-job"
          className="btn-primary btn cursor-pointer font-bold text-white  py-2 px-4 rounded "
        >
          Add Job
        </Link>
      </div>
    </div>
  );
};

export default CardsC;
