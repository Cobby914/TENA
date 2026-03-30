import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";
import { theme } from "./theme";
import { queryClient } from "./lib/queryClient";
import "../styles/globals.css";

if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

window.scrollTo(0, 0);

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const app = (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </QueryClientProvider>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  googleClientId ? <GoogleOAuthProvider clientId={googleClientId}>{app}</GoogleOAuthProvider> : app
);