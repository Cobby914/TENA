import { useState } from "react";
import { Box, Button, Center, Heading, Text, VStack, useToast } from "@chakra-ui/react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { getAuthSession, setAuthSession } from "../auth/session";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const session = getAuthSession();
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  if (session) {
    return <Navigate to="/admin" replace />;
  }

  const destination = location.state?.from?.pathname || "/admin";

  const handleSuccess = async (response) => {
    const credential = response?.credential;
    if (!credential) {
      toast({ title: "Google login failed", status: "error", duration: 3000 });
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/api/auth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ credential })
      });

      const data = await res.json();
      if (!res.ok || !data?.user) {
        throw new Error(data?.error || "Unable to sign in");
      }

      setAuthSession({ token: credential, user: data.user });
      navigate(destination, { replace: true });
    } catch (err) {
      toast({
        title: "Sign in failed",
        description: err instanceof Error ? err.message : "Unexpected error",
        status: "error",
        duration: 3500
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Center minH="100vh" bg="rgb(245,245,245)" px={4}>
      <Box w="100%" maxW="440px" bg="white" borderWidth="1px" borderColor="gray.300" p={8}>
        <VStack spacing={5} align="stretch">
          <Heading size="md" color="gray.800">
            Admin Sign In
          </Heading>
          <Text color="gray.600">Use your Google account to continue.</Text>

          {!clientId ? (
            <Text color="red.500" fontSize="sm">
              Missing VITE_GOOGLE_CLIENT_ID. Add it to your client environment variables.
            </Text>
          ) : (
            <GoogleLogin onSuccess={handleSuccess} onError={() => toast({ title: "Google login failed", status: "error", duration: 3000 })} />
          )}

          {loading && (
            <Button isLoading loadingText="Signing in..." variant="outline" isDisabled>
              Signing in
            </Button>
          )}
        </VStack>
      </Box>
    </Center>
  );
}
