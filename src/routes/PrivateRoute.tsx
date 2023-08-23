import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const currentUser = false;

  if (!currentUser) {
    return <Navigate to="/" replace={true} />;
  }

  return children;
}
