// src/components/layout/Layout.tsx

import React, { useContext } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedHooks";
import { logout } from "../../features/auth/authSlice";
import { ThemeContext } from "../../context/ThemeContext";
import ThemeToggle from "../common/ThemeToggle";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";

const Layout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const role = useAppSelector((state) => state.auth.role);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className={`d-flex min-vh-100 bg-${theme === "dark" ? "dark text-white" : "light"}`}>
      {/* Sidebar */}
      <div className="bg-body-secondary p-3" style={{ width: "220px", minHeight: "100vh" }}>
        <h5 className="text-center mb-4">Admin Panel</h5>
        <Nav className="flex-column">
          <Nav.Link as={NavLink} to="/admin" end>
            Dashboard
          </Nav.Link>

          {role === "admin" && (
            <Nav.Link as={NavLink} to="/admin/users">
              Manage Users
            </Nav.Link>
          )}

          {role === "manager" && (
            <Nav.Link as={NavLink} to="/admin/reports">
              View Reports
            </Nav.Link>
          )}
        </Nav>
      </div>

      {/* Main Content */}
      <Container fluid className="flex-grow-1 p-4">
        <Row className="align-items-center mb-4">
          <Col>
            <strong>Role:</strong> {role || "N/A"}
          </Col>
          <Col className="text-end d-flex justify-content-end align-items-center gap-3">
            <ThemeToggle />
            <Button size="sm" variant="outline-danger" onClick={handleLogout}>
              Logout
            </Button>
          </Col>
        </Row>

        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
