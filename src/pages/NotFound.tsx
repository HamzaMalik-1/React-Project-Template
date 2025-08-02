import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="text-center py-5">
      <h1 className="display-4 text-danger">404 - Page Not Found</h1>
      <p className="lead">Oops! The page you're looking for doesn't exist.</p>
      <Button as={Link} to="/" variant="primary" className="mt-3">
        Go to Home
      </Button>
    </Container>
  );
};

export default NotFound;
