// src/components/common/Header.tsx
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedHooks";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Navbar, Container, Button, Nav } from "react-bootstrap";

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const role = useAppSelector((state) => state.auth.role);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Navbar bg="light" variant="light" expand="lg" className="border-bottom">
      <Container fluid className="justify-content-between">
        <Navbar.Brand>Admin Panel ({role})</Navbar.Brand>

        <Nav className="d-flex align-items-center gap-3">
          <ThemeToggle />
          <Button variant="outline-danger" size="sm" onClick={handleLogout}>
            Logout
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
