import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import ProtectedRoute from "./ProtectedRoute";

function isAdminUser(user) {
  return String(user?.role ?? "").toLowerCase() === "admin";
}

export default function AdminRoute({ children }) {
  const user = useAuthStore((s) => s.session?.user);

  return (
    <ProtectedRoute>
      {isAdminUser(user) ? children : <Navigate to="/" replace />}
    </ProtectedRoute>
  );
}
