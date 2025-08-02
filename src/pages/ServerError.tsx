import React from "react";
import { useNavigate } from "react-router-dom";

const ServerError = () => {
  const navigate = useNavigate();

  return (
    <div className="container text-center py-5">
      <h1 className="display-4 text-danger">500 - Server Error</h1>
      <p className="lead">Something went wrong on our end. Please try again later.</p>
      <button className="btn btn-outline-primary mt-3" onClick={() => navigate(-1)}>
        ⬅ Go Back
      </button>
    </div>
  );
};

export default ServerError;
