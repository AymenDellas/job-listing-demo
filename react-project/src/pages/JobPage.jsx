import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { FaMapMarker } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";

const JobPage = ({ deleteJob }) => {
  const navigate = useNavigate();

  const { id } = useParams();
  const job = useLoaderData();

  const onDeleteClick = (jobId) => {
    const confirm = window.confirm(
      "are you sure u want to delete this listing ?"
    );
    if (!confirm) {
      return;
    }
    deleteJob(jobId);
    toast.success("Job deleted successfully!");
    navigate("/jobs");
  };

  return (
    <>
      <Link
        to={"/jobs"}
        className="flex items-center mx-6 mt-6 text-primary-content w-fit"
      >
        <FaAngleLeft size={20} />
        <p className="font-bold text-primary-content">Go Back</p>
      </Link>
      <div className="container flex justify-between ">
        <div className="leftSide px-12 py-6 w-[70%]">
          <div className="border border-gray-400 bg-[#ffffff] p-4 rounded-lg mb-8">
            <p className="text-sm ">{job.type}</p>
            <p className="font-bold text-xl my-2 relative left-3">
              {job.title}
            </p>
            <div className="font-semibold flex justify-end items-center">
              <FaMapMarker className="mx-2 fill-indigo-500 inline text-lg"></FaMapMarker>
              {job.location}
            </div>
          </div>
          <div className="border border-gray-400 bg-[#ffffff] p-4 rounded-lg my-8">
            <p className="font-bold">Job Description</p>
            <p className="my-4 font-semibold">{job.description}</p>
            <p className="font-bold">Salary</p>
            <p className="my-2 font-semibold">{job.salary} / Year</p>
          </div>
        </div>
        <div className="rightSide px-12 py-6 w-[40%] absolute right-0">
          <div className="border border-gray-400 bg-[#ffffff] p-4 rounded-lg relative ">
            <p className="font-bold mb-6">Company Info</p>
            <p className="font-semibold ">{job.company.name}</p>
            <p className="my-3">{job.company.description}</p>
            <div className="infoContainer w-fit">
              <p className="font-semibold">Contact Email:</p>
              <p className="bg-indigo-200 py-1 px-2 rounded-md font-bold m-2">
                {job.company.contactEmail}
              </p>
              <p className="font-semibold">Contact Phone:</p>
              <p className="bg-indigo-200 py-1 px-2 rounded-md font-bold m-2">
                {job.company.contactPhone}
              </p>
            </div>
          </div>
          <div className="border border-gray-400 bg-[#ffffff] p-4 rounded-lg my-8">
            <p className="font-bold mb-8">Manage Job</p>
            <Link
              to={`/edit-job/${id}`}
              href=""
              className=" border border-gray-400 rounded-lg p-2 flex justify-center font-bold bg-[#262C40] text-white mx-3 my-2 w-full"
            >
              Edit Job
            </Link>
            <button
              onClick={() => onDeleteClick(job.id)}
              href=""
              className=" border border-gray-400 rounded-lg p-2 flex justify-center font-bold bg-red-500 text-white mx-3 my-2 w-full"
            >
              Delete Job
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPage;
