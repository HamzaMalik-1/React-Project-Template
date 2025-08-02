import React from "react";
import { useAppSelector } from "../hooks/useTypedHooks";
import { Navigate } from "react-router-dom";

const UsersPage = () => {
  const role = useAppSelector((state) => state.auth.role);

  // 🔒 Extra safety: Restrict view at component level too
  if (role !== "admin") {
    return <Navigate to="/unauthorized" />;
  }

  return (
    <div>
      <h3 className="mb-4">User Management</h3>

      <table className="table table-bordered table-striped">
        <thead className="table-light">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* 🧪 Dummy data — replace with actual API data later */}
          {[
            { id: 1, name: "Alice", email: "alice@example.com", role: "editor", active: true },
            { id: 2, name: "Bob", email: "bob@example.com", role: "viewer", active: false },
          ].map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <span
                  className={`badge ${
                    user.active ? "bg-success" : "bg-secondary"
                  }`}
                >
                  {user.active ? "Active" : "Inactive"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
