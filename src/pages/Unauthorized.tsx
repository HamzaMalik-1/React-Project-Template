import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <Container className="text-center py-5">
      <h1 className="display-4 text-warning">403 - Unauthorized</h1>
      <p className="lead">You do not have permission to access this page.</p>
      <Link to="/" className="btn btn-outline-primary mt-3">
        Go to Home
      </Link>
    </Container>
  );
};

export default Unauthorized;
