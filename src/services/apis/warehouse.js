import api from "src/services/api";
// import { useQuery } from "@tanstack/react-query";
import { useCustomQuery } from "./init";


function warehouseApiServices() {

  //Post central Store
  async function PostCentralStore() {
    try {
      return await api.post(`warehouse/central_store`,)
    } catch (error) {
      throw error?.response?.data || error;
    }
  }
  //get central stores
  async function getCentralStore() {
    try {
      const response = await api.get(`warehouse/central_store`,)
      return response?.data;
    } catch (error) {

      throw error?.response?.data || error;
    }
  }

  //edit central stores
  async function editCentralStore(id) {
    try {
      const response = await api.put(`warehouse/central_store/${id}`,)
      return response?.data;
    } catch (error) {

      throw error?.response?.data || error;
    }
  }

  //new arrivals
  async function newArrivals() {
    try {
      const response = await api.get(`warehouse/newarrivals`)
      return response?.data;
    } catch (error) {

      throw error?.response?.data || error;
    }
  }

  //get Inventory Item/Product from a particular storage in the warehouse
  async function getWarehouseProducts({ queryKey: [_, id] }) {
    try {
      const response = await api.get(`inventory/warehouse/${id}`,)
      return response?.data;
    } catch (error) {

      throw error?.response?.data || error;
    }
  }


  return {
    getCentralStore,
    PostCentralStore,
    editCentralStore,
    newArrivals,
    getWarehouseProducts
  }
}

// Create a singleton instance of the API service
export const warehouseApis = warehouseApiServices();



export const createWarehouse = async (payload) => {
  return await api.post(`warehouse/`, payload)
}

export const useCentralStore = () => {
  const { isLoading, data, isError, error, } = useCustomQuery({
    queryKey: ["getCentralStore"],
    queryFn: warehouseApis.getCentralStore,
  });

  return {
    isLoading,
    data,
    error,
    isError,
  }
};

const getwarehouses = async ({ queryKey: [_,] }) => {
  return await api.get(`warehouse/`,)
}

export const useWarehouses = () => {
  const { isLoading, data, isError, error, } = useCustomQuery({
    queryKey: ["getwarehouses",],
    queryFn: getwarehouses,
  });

  return {
    isLoading,
    data,
    error,
    isError,
  }
};

export const useNewArrivals = () => {
  const { isLoading, data, isError, error, refetch, isFetching } = useCustomQuery({
    queryKey: ["useNewArrivals",],
    queryFn: warehouseApis.newArrivals,
  });

  return {
    isLoading,
    data,
    error,
    refetch,
    isFetching,
    isError,
  }
};

export const useWarehouseProducts = (storeId) => {
  const { isLoading, data, isError, error, } = useCustomQuery({
  queryKey:["useWarehouseProducts", storeId],
  queryFn: warehouseApis.getWarehouseProducts,
  options: {
    enabled: !!storeId
  }
  });
  
  return {
  isLoading,
  data,
  error,
  isError,
  }
    };