import React from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/useTypedHooks";

const Sidebar = () => {
  // Get the current user's role from Redux
  const role = useAppSelector((state) => state.auth.role);

  return (
    <aside className="bg-light border-end h-100 p-3" style={{ minWidth: "200px" }}>
      <h5 className="text-center mb-4">Admin Panel</h5>

      <nav className="nav flex-column">
        {/* Always visible */}
        <NavLink
          to="/admin"
          end
          className={({ isActive }) => `nav-link ${isActive ? "active fw-bold" : ""}`}
        >
          Dashboard
        </NavLink>

        {/* Visible only for admin */}
        {role === "admin" && (
          <NavLink
            to="/admin/users"
            className={({ isActive }) => `nav-link ${isActive ? "active fw-bold" : ""}`}
          >
            Users
          </NavLink>
        )}

        {/* Visible for admin and editor */}
        {(role === "admin" || role === "editor") && (
          <NavLink
            to="/admin/settings"
            className={({ isActive }) => `nav-link ${isActive ? "active fw-bold" : ""}`}
          >
            Settings
          </NavLink>
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;
