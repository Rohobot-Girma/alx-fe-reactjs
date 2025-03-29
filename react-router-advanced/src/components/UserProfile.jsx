import React from "react";
import { useParams } from "react-router-dom";

function UserProfile() {
  const { userId } = useParams();
  
  return <div>Displaying user profile for user ID: {userId}</div>;
}

export default UserProfile;
