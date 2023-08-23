import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

export default function PrivateRoute({ children }: Props) {
  const currentUser = false;

  if (!currentUser) {
    return <Navigate to="/" replace={true} />;
  }

  return children;
}
