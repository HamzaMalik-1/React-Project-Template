// src/components/common/Sidebar.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/useTypedHooks";
import { Nav } from "react-bootstrap";

const Sidebar = () => {
  const role = useAppSelector((state) => state.auth.role);

  const commonLinks = [{ path: "/admin", label: "Dashboard" }];
  const adminLinks = [
    { path: "/admin/users", label: "Manage Users" },
    { path: "/admin/reports", label: "Reports" },
  ];

  const menuItems = role === "admin" ? [...commonLinks, ...adminLinks] : commonLinks;

  return (
    <aside className="bg-light border-end" style={{ width: "220px", minHeight: "100vh" }}>
      <div className="p-3">
        <h6 className="text-muted mb-3">Menu</h6>
        <Nav className="flex-column">
          {menuItems.map((item) => (
            <Nav.Link
              key={item.path}
              as={NavLink}
              to={item.path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "fw-bold text-primary" : "text-dark"}`
              }
            >
              {item.label}
            </Nav.Link>
          ))}
        </Nav>
      </div>
    </aside>
  );
};

export default Sidebar;
