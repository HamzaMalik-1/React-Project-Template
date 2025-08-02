// src/components/layout/Layout.tsx

import React, { useContext } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedHooks";
import { logout } from "../../features/auth/authSlice";
import { ThemeContext } from "../../context/ThemeContext";
import ThemeToggle from "../common/ThemeToggle";

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
      <aside className="bg-body-secondary p-3" style={{ width: "220px", minHeight: "100vh" }}>
        <h5 className="text-center mb-4">Admin Panel</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <NavLink to="/admin" end className="nav-link">
              Dashboard
            </NavLink>
          </li>

          {/* ✅ Example: Only admins can access Manage Users */}
          {role === "admin" && (
            <li className="nav-item mb-2">
              <NavLink to="/admin/users" className="nav-link">
                Manage Users
              </NavLink>
            </li>
          )}

          {/* ✅ Example: Only managers can access reports */}
          {role === "manager" && (
            <li className="nav-item mb-2">
              <NavLink to="/admin/reports" className="nav-link">
                View Reports
              </NavLink>
            </li>
          )}

          {/* 🔧 More role-based menu items can be added here */}
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-grow-1 p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <strong>Role:</strong> {role || "N/A"}
          </div>
          <div className="d-flex align-items-center gap-3">
            <ThemeToggle />
            <button onClick={handleLogout} className="btn btn-sm btn-outline-danger">
              Logout
            </button>
          </div>
        </div>

        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
