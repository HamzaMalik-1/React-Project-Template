// src/components/common/Sidebar.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/useTypedHooks";

const Sidebar = () => {
  const role = useAppSelector((state) => state.auth.role);

  const commonLinks = [
    { path: "/admin", label: "Dashboard" },
  ];

  const adminLinks = [
    { path: "/admin/users", label: "Manage Users" },
    { path: "/admin/reports", label: "Reports" },
  ];

  const menuItems = role === "admin" ? [...commonLinks, ...adminLinks] : commonLinks;

  return (
    <aside className="bg-light border-end" style={{ width: "220px" }}>
      <nav className="nav flex-column p-3">
        <h6 className="text-muted">Menu</h6>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `nav-link ${isActive ? "active fw-bold" : "text-dark"}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
