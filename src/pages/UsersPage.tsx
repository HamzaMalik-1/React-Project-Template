import React from "react";
import { useAppSelector } from "../hooks/useTypedHooks";
import { Navigate } from "react-router-dom";
import { Container, Table, Badge } from "react-bootstrap";

const UsersPage = () => {
  const role = useAppSelector((state) => state.auth.role);

  // 🔒 Extra safety: Restrict view at component level too
  if (role !== "admin") {
    return <Navigate to="/unauthorized" />;
  }

  const users = [
    { id: 1, name: "Alice", email: "alice@example.com", role: "editor", active: true },
    { id: 2, name: "Bob", email: "bob@example.com", role: "viewer", active: false },
  ];

  return (
    <Container className="py-4">
      <h3 className="mb-4">User Management</h3>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Badge bg={user.active ? "success" : "secondary"}>
                  {user.active ? "Active" : "Inactive"}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default UsersPage;
