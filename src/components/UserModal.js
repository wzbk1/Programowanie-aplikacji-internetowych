import React from "react";

const UserModal = ({ user, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.website}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default UserModal;
