import { useQuery } from "@tanstack/react-query";
//API HOOKS
export const useCustomQuery = ({ queryKey, queryFn, options }) =>
    useQuery({
      queryKey: queryKey,
      queryFn: queryFn,
      retryOnMount: true,
      refetchInterval: 300000,
      refetchOnWindowFocus: true,
      refetchOnReconnect: "always",
      refetchIntervalInBackground: true,
      ...options,
    });