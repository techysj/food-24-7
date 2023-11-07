import { createContext } from "react";
const UserContext = createContext({
  user: "Shrey",
});
export const UserName = createContext({
  name: "Shrey",
});

export default UserContext;
