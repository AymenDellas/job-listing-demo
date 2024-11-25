import React from "react";
import { FaReact } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar flex items-center justify-between h-[60px] bg-transparent p-7 text-primary-content cursor-pointer font-semibold">
        <div className="flex justify-center items-center">
          <FaReact size={32} />
          <h2 className="ml-2 font-bold">React Jobs</h2>
        </div>
        <ul className="flex list-none p-0">
          <li className="mx-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-primary-content ${
                  isActive
                    ? "btn btn-primary"
                    : "bg-transparent "
                }`
              }
            >
              Home
            </NavLink>
          </li>

          <li className="mx-2">
            <NavLink
              to="/jobs"
              className={({ isActive }) =>
                `text-primary-content ${
                  isActive
                    ? "btn btn-primary"
                    : "bg-transparent "
                }`
              }
            >
              Jobs
            </NavLink>
          </li>
          <li className="mx-2">
            <NavLink
              to="/add-job"
              className={({ isActive }) =>
                `text-primary-content ${
                  isActive
                    ? "btn btn-primary"
                    : "bg-transparent "
                }`
              }
            >
              Add Job
            </NavLink>
          </li>
        </ul>
      </div>
      {/* <hr className="border-none h-[2px] bg-black m-0 bg-gradient-to-r from-[#e4f0d0] via-[#262c40] to-[#e4f0d0] " /> */}
    </>
  );
};

export default Navbar;
