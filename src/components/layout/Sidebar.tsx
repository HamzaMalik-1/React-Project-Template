// src/components/layout/Sidebar.tsx

import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/useTypedHooks";

const Sidebar = () => {
  const role = useAppSelector((state) => state.auth.role);

  return (
    <div className="bg-light border-end h-100 p-3" style={{ minWidth: "200px" }}>
      <h5 className="text-center mb-4">Admin Panel</h5>

      <Nav className="flex-column">
        <Nav.Link
          as={NavLink}
          to="/admin"
          end
          className={({ isActive }) => (isActive ? "fw-bold" : "")}
        >
          Dashboard
        </Nav.Link>

        {role === "admin" && (
          <Nav.Link
            as={NavLink}
            to="/admin/users"
            className={({ isActive }) => (isActive ? "fw-bold" : "")}
          >
            Users
          </Nav.Link>
        )}

        {(role === "admin" || role === "editor") && (
          <Nav.Link
            as={NavLink}
            to="/admin/settings"
            className={({ isActive }) => (isActive ? "fw-bold" : "")}
          >
            Settings
          </Nav.Link>
        )}
      </Nav>
    </div>
  );
};

export default Sidebar;
