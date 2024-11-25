import { React, useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";

const BrowseJobs = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs";

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  const visibleJobs = jobs.map((job) => (
    <JobListing key={job.id} job={job}></JobListing>
  ));

  return (
    <div className="p-4">
      <h1 className="text-center text-2xl font-bold mb-6">
        {isHome ? "Recent Jobs" : loading ? "" : "Browse Jobs"}
      </h1>
      <div className="flex flex-wrap justify-center">
        {loading ? <Spinner loading={loading} /> : visibleJobs}
      </div>
    </div>
  );
};

export default BrowseJobs;
