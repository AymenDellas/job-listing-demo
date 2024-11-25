import React from "react";
import Hero from "../components/Hero";
import CardsC from "../components/CardsC";
import BrowseJobs from "../components/BrowseJobs";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePage = () => {
  return (
    <>
      <Hero></Hero>
      <CardsC></CardsC>
      <BrowseJobs isHome={true}></BrowseJobs>
      <ViewAllJobs></ViewAllJobs>
    </>
  );
};

export default HomePage;
