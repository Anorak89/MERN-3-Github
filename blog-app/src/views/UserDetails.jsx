import React from "react";
import { useParams } from "react-router-dom";
const UserDetails = ({ users }) => {
  const params = useParams();
  const id = params.id;

  const user = users.find((u) => u.id == id);
  if (!user) return <p>No user found little git</p>;
  return (
    <div>
      <h3>User Details</h3>
      <div>Name: {user.name}</div>
      <div>Username: {user.username}</div>
      <div>Number of Comments: {user.numberOfComments}</div>
    </div>
  );
};

export default UserDetails;
