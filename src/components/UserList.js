import React from "react";

const UserList = ({ users, onUserSelect }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} onClick={() => onUserSelect(user)}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </li>
      ))}
    </ul>
  );
};

export default UserList;
