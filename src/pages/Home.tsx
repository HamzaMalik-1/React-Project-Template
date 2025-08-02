// src/pages/Home.tsx
import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useTypedHooks";
import { fetchUsers } from "../features/user/userAPI";
import UserList from "../components/UserList";

const Home = () => {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container mt-4">
      <h2>Users</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">{error}</p>}
      <UserList users={users} />
    </div>
  );
};

export default Home;
