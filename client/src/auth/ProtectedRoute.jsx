import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const session = useAuthStore((s) => s.session);

  if (!session) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}
