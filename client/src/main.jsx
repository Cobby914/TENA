import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";
import "../styles/globals.css";

if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

window.scrollTo(0, 0);

const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
const app = (
  <ChakraProvider>
    <App />
  </ChakraProvider>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  googleClientId ? <GoogleOAuthProvider clientId={googleClientId}>{app}</GoogleOAuthProvider> : app
);