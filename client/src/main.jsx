import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import FirebaseAuthGate from "./auth/FirebaseAuthGate";
import { theme } from "./theme";
import { queryClient } from "./lib/queryClient";
import "../styles/globals.css";

if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

window.scrollTo(0, 0);

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <FirebaseAuthGate>
        <App />
      </FirebaseAuthGate>
    </ChakraProvider>
  </QueryClientProvider>
);
