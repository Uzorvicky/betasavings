import api from "src/services/api";
import { useCustomQuery } from "./init";


function productApiServices() {

  //get products
  async function getProducts() {
    try {
      const response = await api.get(`product/`,)
      return response?.data;
    } catch (error) {

      throw error?.response?.data || error;
    }
  }
//product categories

async function getCategories() {
  try {
    const response = await api.get(`product/category`,)
    return response?.data;
  } catch (error) {

    throw error?.response?.data || error;
  }
}

  return {
    getProducts,
    getCategories
  }
}

// Create a singleton instance of the API service
export const productApis = productApiServices();


export const postProduct = async (payload) => {
  return await api.post(`product/`, payload)
}

export const useProducts = () => {
  const { isLoading, data, isError, error, refetch} = useCustomQuery({
    queryKey: ["getuseProducts",],
    queryFn: productApis.getProducts,
  });

  return {
    isLoading,
    data,
    error,
    isError,
    refetch
  }
};

export const postProdCat = async (payload) => {
  return await api.post(`product/category`, payload)
}

export const useProdCategory = () => {
  const { isLoading, data, isError, error, } = useCustomQuery({
    queryKey: ["getProdCategory",],
    queryFn: productApis.getCategories,
    staleTime: Infinity,
    refetchOnWindowFocus: false
  });

  return {
    isLoading,
    data,
    error,
    isError,
  }
};