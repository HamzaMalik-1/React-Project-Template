// src/components/UserList.tsx

import React from "react";
import { ListGroup } from "react-bootstrap";
import { User } from "../types";

const UserList = ({ users }: { users: User[] }) => {
  return (
    <ListGroup>
      {users.map((user) => (
        <ListGroup.Item key={user.id}>
          <strong>{user.name}</strong> – {user.email}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default UserList;
