// src/components/layout/Header.tsx

import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { useAppDispatch } from "../../hooks/useTypedHooks";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Navbar bg="light" className="border-bottom">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand className="fw-bold">Admin Dashboard</Navbar.Brand>
        <Button variant="outline-danger" size="sm" onClick={handleLogout}>
          Logout
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
