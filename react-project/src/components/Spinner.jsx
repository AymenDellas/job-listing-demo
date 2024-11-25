import React from "react";
import MoonLoader from "react-spinners/MoonLoader";

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "calc(100vh - 190px)",
};

const Spinner = ({ loading }) => {
  return (
    <div style={containerStyle}>
      <MoonLoader color="#262C40" size={150} speedMultiplier={1} />
    </div>
  );
};

export default Spinner;
