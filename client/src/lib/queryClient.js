import { QueryClient } from "@tanstack/react-query";

/** Shared defaults: avoid refetching on every mount; keep unused data for a while. */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      gcTime: 30 * 60_000,
      retry: 1,
      refetchOnWindowFocus: true
    }
  }
});
