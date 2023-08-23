import { createContext, useState, useContext, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

// create context
const AuthContext = createContext();

export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<null>(null);

  const value = {
    currentUser,
    setCurrentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
