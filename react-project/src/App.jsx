import React from "react";
import HomePage from "./pages/HomePage";
import NavLayout from "./Layouts/NavLayout";
import JobsPage from "./pages/JobsPage";
import AddJobPage from "./pages/AddJobPage";
import NotFound from "./pages/NotFound";
import JobPage from "./pages/JobPage";
import EditJobPage from "./pages/EditJobPage";
import { useParams } from "react-router-dom";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
//Fetching data
const fetchJob = async ({ params }) => {
  const { id } = params;
  try {
    const res = await fetch(`/api/jobs/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error fetching data", error);
  }
};

// Adding a job
const addJob = async function (newJob) {
  const res = await fetch("/api/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJob),
  });
  return;
};

//Deleting a job

const deleteJob = async (id) => {
  const res = await fetch(`/api/jobs/${id}`, {
    method: "DELETE",
  });
  return;
};

//Updating a job

const updateJob = async function (job) {
  const res = await fetch(`/api/jobs/${job.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(job),
  });
  return;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<NavLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage SubmitData={addJob} />} />
        <Route
          path="/job/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={fetchJob}
        />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateData={updateJob} />}
          loader={fetchJob}
        />
      </Route>
    </>
  )
);
const App = () => {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
};

export default App;
