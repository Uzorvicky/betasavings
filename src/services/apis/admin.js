
import api from "src/services/api";
import { useQuery } from "@tanstack/react-query";


export const getBizPlans = async () => {
    const resp =  await api.get(`admin/business_plan`, )
    return resp?.data
  }

export const useBusinessPlans = () => {

    const { isLoading, data} = useQuery({
        queryKey:["business_plans"],
        queryFn: getBizPlans,
        staleTime:Infinity,
        refetchOnMount:false,
        refetchOnWindowFocus:false,
        refetchInterval: false
    })

    return {isLoading, data}
  }