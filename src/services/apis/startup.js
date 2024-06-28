import api from "src/services/api";
import { useQuery } from "@tanstack/react-query";



const getCountry = async({queryKey:[_, id]}) =>{
  console.log(id)
  const res = await api.get(`startup/country/${id}`, )
  return res?.data

}

export const useCountry = (id) => {
  const { isLoading, data} = useQuery({
      queryKey:["country", id],
      queryFn: getCountry,
      staleTime:Infinity,
      // refetchOnMount:false,
      // refetchOnWindowFocus:false,
      // refetchInterval: false,
      enabled: !!id
  })

  return {isLoading, data}
}
export const getCountries = async (payload) => {
    return await api.get(`startup/countries`, payload)
  }


  export const useCountries = () => {

    const { isLoading, data} = useQuery({
        queryKey:["countries_states"],
        queryFn: getCountries,
        staleTime:Infinity,
        refetchOnMount:false,
        refetchOnWindowFocus:false,
        refetchInterval: false
    })

    return {isLoading, data}
  }


  export const getlga = async ({queryKey:[_, id]}) => {
    const res =  await api.get(`startup/country/state/lga/${id}`)
    return res.data
  }

  export const useLgas = (id) => {
    const { isLoading, data} = useQuery({
        queryKey:["lgas", id],
        queryFn: getlga,
        enabled: !!id,
        refetchOnMount:false,
        refetchOnWindowFocus:false,
    })

    return {isLoading, data}
  }
 