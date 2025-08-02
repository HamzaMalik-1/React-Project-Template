// src/pages/Home.tsx
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedHooks";
import { fetchUsers } from "../features/user/userAPI";
import UserList from "../components/UserList";
import { Container, Spinner, Alert } from "react-bootstrap";

const Home = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <Container className="mt-4">
      <h2>Users</h2>

      {loading && (
        <div className="d-flex align-items-center gap-2">
          <Spinner animation="border" size="sm" role="status" />
          <span>Loading...</span>
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      <UserList users={users} />
    </Container>
  );
};

export default Home;
