import { useState } from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
  useToast
} from "@chakra-ui/react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { GoogleLogin } from "@react-oauth/google";
import { useAuthStore } from "../store/useAuthStore";
import { getFirebaseApp } from "../lib/firebase";

const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const location = useLocation();
  const navigate = useNavigate();
  const session = useAuthStore((s) => s.session);
  const setSession = useAuthStore((s) => s.setSession);
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  if (session) {
    return <Navigate to="/admin" replace />;
  }

  const destination = location.state?.from?.pathname || "/admin";

  const handleSuccess = async (response) => {
    const googleIdToken = response?.credential;
    if (!googleIdToken) {
      toast({ title: "Google login failed", status: "error", duration: 3000 });
      return;
    }

    const firebaseApp = getFirebaseApp();
    if (!firebaseApp) {
      toast({
        title: "Firebase not configured",
        description: "Add VITE_FIREBASE_* variables to the client environment.",
        status: "error",
        duration: 4000
      });
      return;
    }

    try {
      setLoading(true);
      const auth = getAuth(firebaseApp);
      const fbCred = GoogleAuthProvider.credential(googleIdToken);
      const fbUser = await signInWithCredential(auth, fbCred);
      const idToken = await fbUser.user.getIdToken();

      const res = await fetch(`${API_BASE}/api/auth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken })
      });

      const data = await res.json();
      if (!res.ok || !data?.user) {
        throw new Error(data?.error || "Unable to sign in");
      }

      setSession({ user: data.user });
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

  const handleLocalLogin = () => {
    if (email || password) {
      toast({
        title: "Local login is not enabled",
        description: "Use the Google sign-in option below.",
        status: "info",
        duration: 3000
      });
      return;
    }

    toast({
      title: "Use Google sign in",
      description: "Local email/password login is not connected yet.",
      status: "info",
      duration: 3000
    });
  };

  return (
    <Center minH="100vh" bg="rgb(40, 40, 40)" px={4}>
      <Box
        w="100%"
        maxW="620px"
        bg="rgba(245,245,245,0.96)"
        borderWidth="1px"
        borderColor="gray.400"
        boxShadow="2xl"
        p={{ base: 6, md: 8 }}
      >
        <VStack spacing={5} align="stretch">
          <Box>
            <Heading size="lg" color="gray.800">
              Admin Access
            </Heading>
            <Text color="gray.700" mt={1}>
              Enter credentials to continue
            </Text>
          </Box>

          <FormControl>
            <FormLabel mb={1} color="gray.800" fontSize="sm">
              Email
            </FormLabel>
            <Input
              bg="white"
              borderColor="gray.400"
              borderRadius="sm"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
            />
          </FormControl>

          <FormControl>
            <FormLabel mb={1} color="gray.800" fontSize="sm">
              Password
            </FormLabel>
            <Input
              type="password"
              bg="white"
              borderColor="gray.400"
              borderRadius="sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="..."
            />
          </FormControl>

          <HStack justify="flex-start" spacing={3}>
            <Button
              bg="gray.700"
              color="white"
              borderRadius="sm"
              minW="120px"
              onClick={handleLocalLogin}
            >
              Login
            </Button>
            <Button
              variant="outline"
              borderColor="gray.500"
              borderRadius="sm"
              minW="120px"
              onClick={() => navigate("/", { replace: true })}
            >
              Cancel
            </Button>
          </HStack>

          <Divider borderColor="gray.400" />

          <VStack spacing={3} align="stretch">
            <Text fontSize="sm" color="gray.700">
              Or continue with Google
            </Text>
            {!clientId ? (
              <Text color="red.500" fontSize="sm">
                Missing VITE_GOOGLE_CLIENT_ID. Add it to your client environment variables (same Web client as in
                Firebase Console → Authentication → Google).
              </Text>
            ) : (
              <GoogleLogin
                onSuccess={handleSuccess}
                onError={() => toast({ title: "Google login failed", status: "error", duration: 3000 })}
              />
            )}

            {loading && (
              <Button isLoading loadingText="Signing in..." variant="outline" isDisabled>
                Signing in
              </Button>
            )}
          </VStack>
        </VStack>
      </Box>
    </Center>
  );
}
