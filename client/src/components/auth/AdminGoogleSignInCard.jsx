import { useState } from "react";
import { Box, Button, Center, Heading, Text, VStack, useToast } from "@chakra-ui/react";
import { completeGoogleAdminSignIn } from "../../auth/completeGoogleSignIn";
import { getFirebaseApp } from "../../lib/firebase";
import { getApiBaseUrl } from "../../lib/apiBase.js";

const API_BASE = getApiBaseUrl();

/** Optional: Google Workspace domain hint (`hd`) for the account picker. */
const HOSTED_DOMAIN = (import.meta.env.VITE_GOOGLE_HOSTED_DOMAIN || "").trim() || undefined;

function firebaseErrorMessage(err) {
  const code = err?.code ?? "";
  if (code === "auth/popup-closed-by-user") return "Sign-in was cancelled.";
  if (code === "auth/popup-blocked") return "Allow pop-ups for this site and try again.";
  if (code === "auth/cancelled-popup-request") return "Only one sign-in window at a time.";
  return err instanceof Error ? err.message : "Sign in failed";
}

export default function AdminGoogleSignInCard({ onSignedIn }) {
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const firebaseReady = Boolean(getFirebaseApp());

  const handleClick = async () => {
    try {
      setLoading(true);
      const user = await completeGoogleAdminSignIn(API_BASE, { hostedDomain: HOSTED_DOMAIN });
      onSignedIn(user);
    } catch (err) {
      const status = err?.status;
      const message = status ? (err instanceof Error ? err.message : "Unable to sign in") : firebaseErrorMessage(err);
      toast({
        title: status === 403 ? "Access restricted" : "Sign in failed",
        description: message,
        status: "error",
        duration: status === 403 ? 5000 : 4000
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      w="100%"
      maxW="440px"
      bg="surface.softAlpha"
      borderWidth="1px"
      borderColor="gray.400"
      boxShadow="2xl"
      p={{ base: 8, md: 10 }}
      borderRadius="md"
    >
      <VStack spacing={6} align="stretch">
        <Box textAlign="center">
          <Heading size="lg" color="gray.800">
            TENA admin
          </Heading>
          <Text color="gray.600" mt={2} fontSize="sm">
            Sign in with your organization Google account. Access is approved by an administrator after your first
            sign-in.
          </Text>
        </Box>

        {!firebaseReady ? (
          <Text color="red.500" fontSize="sm" textAlign="center">
            Missing Firebase web config. Add all <code>VITE_FIREBASE_*</code> variables from Firebase Console → Project
            settings → Your apps.
          </Text>
        ) : (
          <Center>
            <Button
              size="lg"
              bg="surface.default"
              color="gray.800"
              borderWidth="1px"
              borderColor="gray.400"
              onClick={handleClick}
              isLoading={loading}
              loadingText="Signing in..."
              isDisabled={loading}
            >
              Continue with Google
            </Button>
          </Center>
        )}
      </VStack>
    </Box>
  );
}
