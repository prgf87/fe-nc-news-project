import { createContext, useState } from "react";

const defaultUsers = [
  {
    username: "Pedro Ferreira",
    avatar_url: "https://avatars.githubusercontent.com/u/50713178",
    kudos: 0,
  },
];

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState(defaultUsers);
  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
};
