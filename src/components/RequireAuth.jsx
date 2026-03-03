import { useContext } from "react";
import { Navigate } from "react-router-dom";
import UserContext from "../pages/UserContext";

export default function RequireAuth({ children }) {
  const token = useContext(UserContext).token;

  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
}
