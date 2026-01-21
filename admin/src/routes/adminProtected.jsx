import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function AdminProtected({ children }) {
  const { admin } = useAuth();

  if (!admin) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
