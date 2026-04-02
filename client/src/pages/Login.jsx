import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { Center } from "@chakra-ui/react";
import { useAuthStore } from "../store/useAuthStore";
import AdminGoogleSignInCard from "../components/auth/AdminGoogleSignInCard";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const session = useAuthStore((s) => s.session);
  const setSession = useAuthStore((s) => s.setSession);

  if (session) {
    return <Navigate to="/admin" replace />;
  }

  const destination = location.state?.from?.pathname || "/admin";

  return (
    <Center minH="100vh" bg="rgb(40, 40, 40)" px={4}>
      <AdminGoogleSignInCard
        onSignedIn={(user) => {
          setSession({ user });
          navigate(destination, { replace: true });
        }}
      />
    </Center>
  );
}
