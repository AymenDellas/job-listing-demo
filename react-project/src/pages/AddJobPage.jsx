import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
const AddJobPage = ({ SubmitData }) => {
  const [type, setType] = useState("Full-Time");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [salary, setSalary] = useState("Under $50K");
  const [companyName, setCompanyName] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [contactEmail, setCompanyEmail] = useState("");
  const [contactPhone, setCompanyPhone] = useState("");
  const navigate = useNavigate();
  const submitForm = function (e) {
    e.preventDefault();
    const newJob = {
      type,
      title,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };
    SubmitData(newJob);
    toast.success("Job added successfully!");
    navigate("/jobs");
  };
  return (
    <>
      <div className="container flex flex-col w-[40%] bg-[#12141a] mx-auto p-10 mt-4 rounded-lg border border-gray-400 text-white">
        <p className="text-3xl font-bold justify-center flex">Add Job</p>

        <div className="type w-full">
          <form onSubmit={submitForm}>
            <label htmlFor="type" className="block">
              Job Type
            </label>
            <select
              required
              name="type"
              id="type"
              className="w-full text-black font-semibold"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Remote-time">Remote-time</option>
              <option value="Full-time">Full-time</option>
            </select>
            <label htmlFor="listingName" className="block w-">
              Job Listing name
            </label>
            <input
              type="text"
              name="listingName"
              placeholder="eg. Beautiful Apartment in Miami"
              className="w-full"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="desc" className="block">
              Description
            </label>
            <textarea
              name="desc"
              id="desc"
              placeholder="Add any job duties, expectaions, requirements, etc"
              className="h-15vh w-full text-black"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <label htmlFor="salary">Salary</label>
            <select
              name="salary"
              id="salary"
              className="w-full text-black font-semibold"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            >
              <option value="Under $50K">Under $50K</option>
              <option value="$50K - 60K">$50K - $60K</option>
              <option value="$60K - 70K">$60K - $70K</option>
              <option value="$70K - 80K">$70K - $80K</option>
              <option value="$80K - 90K">$80K - $90K</option>
              <option value="$90K - 100K">$90K - $100K</option>
              <option value="$100K - 125K">$100K - $125K</option>
              <option value="$125K - 150K">$125K - $150K</option>
              <option value="$150K - 175K">$150K - $175K</option>
              <option value="$175K - 200K">$175K - $200K</option>
              <option value="Over $200K">Over $200K</option>
            </select>
            <label htmlFor="location" className="block">
              Location
            </label>
            <input
              type="text"
              placeholder="Company Location"
              className="w-full"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <p className="text-xl font-semibold">Company Info</p>
            <label htmlFor="name" className="block">
              Company Name
            </label>
            <input
              type="text"
              className="w-full"
              placeholder="Company name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <label htmlFor="cDesc">Company Description</label>
            <textarea
              name="cDesc"
              id="cDesc"
              placeholder="What does your company do ?"
              className="h-15vh w-full text-black"
              value={companyDescription}
              onChange={(e) => setCompanyDescription(e.target.value)}
            ></textarea>
            <label htmlFor="email">Contact Email</label>
            <input
              type="text"
              className="w-full"
              placeholder="Email adress for applicants"
              value={contactEmail}
              onChange={(e) => setCompanyEmail(e.target.value)}
            />
            <label htmlFor="phone">Contact Phone</label>
            <input
              type="text"
              className="w-full"
              placeholder="Optional phone for applicants"
              value={contactPhone}
              onChange={(e) => setCompanyPhone(e.target.value)}
            />
            <button
              type="submit"
              className="justify-center flex mt-8 bg-[#262C40] w-full font-bold rounded-2xl text-white p-2"
            >
              Add Job
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddJobPage;
