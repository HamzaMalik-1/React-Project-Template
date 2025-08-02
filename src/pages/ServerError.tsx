import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const ServerError = () => {
  const navigate = useNavigate();

  return (
    <Container className="text-center py-5">
      <h1 className="display-4 text-danger">500 - Server Error</h1>
      <p className="lead">Something went wrong on our end. Please try again later.</p>
      <Button variant="outline-primary" className="mt-3" onClick={() => navigate(-1)}>
        ⬅ Go Back
      </Button>
    </Container>
  );
};

export default ServerError;
