import { QueryClient } from "@tanstack/react-query";

/** Shared defaults: avoid refetching on every mount; keep unused data for a while. */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      /** Public content does not need constant refetch; reduces work and UI stalls. */
      staleTime: 3 * 60_000,
      gcTime: 30 * 60_000,
      retry: 1,
      /** Tab focus refetches every active query — often feels like random lag. */
      refetchOnWindowFocus: false
    }
  }
});
