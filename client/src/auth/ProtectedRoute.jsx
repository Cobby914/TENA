import { Navigate, useLocation } from "react-router-dom";
import { getAuthSession } from "./session";

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  const session = getAuthSession();

  if (!session) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}
