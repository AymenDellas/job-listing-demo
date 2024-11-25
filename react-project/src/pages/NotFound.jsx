import React from "react";
import { FiAlertCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import HomePage from "./HomePage";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-28 text-white">
        <FiAlertCircle className="text-yellow-400 size-32" />
        <p className="text-5xl font-bold">404 Not Found</p>
        <p className="text-2xl font-semibold mt-4">This page does not exist</p>
        <Link
          to="/"
          className="py-2 px-4 mt-8 rounded-md  text-white font-bold hover:bg-[#37405e] "
        >
          Go Back
        </Link>
      </div>
    </>
  );
};

export default NotFound;
