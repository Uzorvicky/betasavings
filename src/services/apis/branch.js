import api from "src/services/api";
import { useQuery } from "@tanstack/react-query";

export const createbranch = async (payload) => {
    return await api.post(`users/branch`, payload)
}

const getbranches = async ({ queryKey: [_,] }) => {
    return await api.get(`users/branches`, )
  }
  
  export const useBranches = () => {
    const { isLoading, data, isError, error, } = useQuery({
    queryKey:["getbranches",],
    queryFn: getbranches,
    });
    
    return {
    isLoading,
    data,
    error,
    isError,
    }
      };