import { useContext } from "react";
import UserContext from "./UserContext";
export default function UserProfile() {
  const { userData } = useContext(UserContext);
  return (
    <div>
      <h2>{userData.name}</h2>
      <p>Age:{userData.email}</p>
      <p>Bio:{userData.bio}</p>
    </div>
  );
}
