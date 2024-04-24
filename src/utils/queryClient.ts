import { QueryClient } from "@tanstack/react-query";
const minute = 1000 * 60;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: false,
      refetchIntervalInBackground: false,
      refetchOnMount: false,
      retry: false,
      staleTime: 10 * minute,
      gcTime: 10 * minute,
    },
  },
});
