import { useContext } from "react";
import { UserName } from "../utils/UserContext";
const Contact = () => {
const userName = useContext(UserName);
  return (
    <div>
      <h1>Contact</h1>
      <h1>{userName}</h1>
    </div>
  );
};
export default Contact;
