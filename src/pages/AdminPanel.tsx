// src/pages/AdminPanel.tsx

import React from "react";
import { useAppSelector } from "../hooks/useTypedHooks";

const AdminPanel = () => {
  const role = useAppSelector((state) => state.auth.role);
  const userName = "Admin User"; // You can fetch this from Redux or API in real apps

  return (
    <div>
      <h2>Welcome, {userName} 👋</h2>
      <p className="text-muted">You're logged in as <strong>{role}</strong>.</p>

      <hr />

      {/* You can customize this dashboard overview */}
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Total Users</h5>
              <p className="card-text display-6">123</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Pending Requests</h5>
              <p className="card-text display-6">5</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">System Status</h5>
              <p className="card-text text-success fw-bold">All Systems Operational</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
