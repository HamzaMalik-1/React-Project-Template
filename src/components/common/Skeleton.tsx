import React from "react";

const Skeleton = ({ height = "1rem", width = "100%", className = "" }) => {
  return (
    <div
      className={`bg-secondary bg-opacity-25 rounded ${className}`}
      style={{ height, width, animation: "pulse 1.5s infinite" }}
    />
  );
};

export default Skeleton;
