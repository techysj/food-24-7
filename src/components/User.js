import { useState } from "react";
const User = ({ name, location }) => {
  const [count] = useState(0);
  return (
    <div className="user-card">
      <h4>count F: {count}</h4>
      <h4>UserName: {name}</h4>
      <h4>Location: {location}</h4>
    </div>
  );
};
export default User;
