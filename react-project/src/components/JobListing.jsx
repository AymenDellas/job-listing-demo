import React from "react";
import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobListing = ({ job }) => {
  const [ShowFullDescription, SetShowFullDescription] = useState(false);
  let description = job.description;
  if (!ShowFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <div
      key={job.id}
      className="w-[28%] h-[80%] flex flex-col p-3 transition-shadow duration-100 m-4  card bg-primary-content text-white rounded-lg  shadow-sm hover:shadow-lg "
    >
      <h3 className="text-lg font-semibold mb-2">{job.type}</h3>
      <h2 className="text-xl font-bold mb-2">{job.title}</h2>
      <p className="text-white mb-4">{description}</p>
      <a
        onClick={() => SetShowFullDescription(!ShowFullDescription)}
        className="text-primary hover:underline  cursor-pointer"
      >
        {ShowFullDescription ? "Less" : "More"}
      </a>
      <p className="text-white font-medium mb-4">{job.salary} / Year</p>
      <div className="mt-auto flex justify-between items-center">
        <div>
          <FaMapMarker className="mx-2 fill-primary inline text-lg"></FaMapMarker>
          {job.location}
        </div>
        <Link
          to={`/job/${job.id}`}
          className="w-fit justify-end cursor-pointer font-bold py-2 px-4 rounded btn btn-primary text-white  "
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default JobListing;
