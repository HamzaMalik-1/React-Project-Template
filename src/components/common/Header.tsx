// src/components/common/Header.tsx
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useTypedHooks";
import { logout } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const role = useAppSelector((state) => state.auth.role);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <header className="d-flex justify-content-between align-items-center px-4 py-3 border-bottom bg-body-secondary">
      <h5 className="mb-0">Admin Panel ({role})</h5>
      <div className="d-flex align-items-center gap-3">
        <ThemeToggle />
        <button className="btn btn-sm btn-outline-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
