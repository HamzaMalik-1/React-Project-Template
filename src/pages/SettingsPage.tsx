import React from "react";
import { useAppSelector } from "../hooks/useTypedHooks";
import { Navigate } from "react-router-dom";

const SettingsPage = () => {
  const role = useAppSelector((state) => state.auth.role);

  // 👮 Restrict access to only admin and editor
  if (role !== "admin" && role !== "editor") {
    return <Navigate to="/unauthorized" />;
  }

  return (
    <div>
      <h3 className="mb-4">Settings</h3>
      <p>This is a placeholder settings page. You can customize settings here.</p>
    </div>
  );
};

export default SettingsPage;
