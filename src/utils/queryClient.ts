import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchInterval: false,
      refetchIntervalInBackground: false,
      refetchOnMount: false,
      initialData: undefined,
      notifyOnChangeProps: ["data", "error"],
      retry: false,
      staleTime: 10 * (60 * 1000),
      gcTime: 10 * (60 * 1000),
    },
  },
});
