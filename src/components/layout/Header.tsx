import React from "react";
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
    <header className="d-flex justify-content-between align-items-center p-3 border-bottom">
      <h5 className="m-0">Admin Dashboard</h5>
      <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>
        Logout
      </button>
    </header>
  );
};

export default Header;
