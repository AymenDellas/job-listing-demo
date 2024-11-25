import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
const EditJobPage = ({ updateData }) => {
  const job = useLoaderData();
  const [type, setType] = useState(job.type);
  const [title, setTitle] = useState(job.title);
  const [location, setLocation] = useState(job.location);
  const [description, setDescription] = useState(job.description);
  const [salary, setSalary] = useState(job.salary);
  const [companyName, setCompanyName] = useState(job.company.name);
  const [companyDescription, setCompanyDescription] = useState(
    job.company.description
  );
  const [contactEmail, setCompanyEmail] = useState(job.company.contactEmail);
  const [contactPhone, setCompanyPhone] = useState(job.company.contactPhone);

  const navigate = useNavigate();
  const { id } = useParams(); // Corrected

  const updatedForm = (e) => {
    // Accept event parameter
    e.preventDefault();
    const updatedJob = {
      id,
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
    updateData(updatedJob); // Use updateData from props
    toast.success("Job updated successfully!");
    navigate(`/job/${id}`);
  };
  return (
    <>
      <Link
        to={`/job/${id}`}
        className="flex items-center mx-6 mt-6 text-primary-content w-fit"
      >
        <FaAngleLeft size={20} />
        <p className="font-bold text-primary-content">Go Back</p>
      </Link>
    <div className="container flex flex-col w-[40%] bg-primary-content mx-auto p-10 mt-4 rounded-lg border  text-white">
      <p className="text-3xl font-bold justify-center flex">Edit Job</p>

      <div className="type w-full">
        <form onSubmit={updatedForm}>
          <label htmlFor="type" className="block my-2 font-semibold ">
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
          <label htmlFor="listingName" className="block my-2 font-semibold">
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
          <label htmlFor="desc" className="block my-2 font-semibold">
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
          <label htmlFor="salary" className="my-2 block font-semibold">Salary</label>
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
          <label htmlFor="location" className="block my-2 font-semibold">
            Location
          </label>
          <input
            type="text"
            placeholder="Company Location"
            className="w-full"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <p className="text-xl my-2 font-bold ">Company Info</p>
          <label htmlFor="name" className="block my-2 font-semibold">
            Company Name
          </label>
          <input
            type="text"
            className="w-full"
            placeholder="Company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
          <label htmlFor="cDesc " className="my-2 font-semibold block">Company Description</label>
          <textarea
            name="cDesc"
            id="cDesc"
            placeholder="What does your company do ?"
            className="h-15vh w-full text-black"
            value={companyDescription}
            onChange={(e) => setCompanyDescription(e.target.value)}
          ></textarea>
          <label htmlFor="email" className="my-2 font-semibold block">Contact Email</label>
          <input
            type="text"
            className="w-full"
            placeholder="Email adress for applicants"
            value={contactEmail}
            onChange={(e) => setCompanyEmail(e.target.value)}
          />
          <label htmlFor="phone" className="my-2 font-semibold block">Contact Phone</label>
          <input
            type="text"
            className="w-full"
            placeholder="Optional phone for applicants"
            value={contactPhone}
            onChange={(e) => setCompanyPhone(e.target.value)}
          />
          <button
            type="submit"
            className="justify-center flex mt-8 bg-primary w-full font-bold rounded-2xl text-white p-2"
          >
            Edit Job
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default EditJobPage;
