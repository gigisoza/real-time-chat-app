import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

interface Props {
  children: ReactNode;
}

export default function PrivateRoute({ children }: Props) {
  const { currentUser } = UserAuth();

  if (!currentUser) {
    return <Navigate to="/" replace={true} />;
  }

  return children;
}
