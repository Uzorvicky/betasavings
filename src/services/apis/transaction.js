import api from "src/services/api";
import { useCustomQuery } from "./init";


function transactionApiServices() {

  //Post central Store
  async function PostPurchase(payload) {
    try {
      return await api.post(`purchase`, payload)
    } catch (error) {
      throw error?.response?.data || error;
    }
  }
    //get single sale
    async function getSingleSale ({ queryKey: [_, id] }) {
      try {
        const response = await api.get(`sale/${id}`)
        return response?.data;
      } catch (error) {
  
        throw error?.response?.data || error;
      }
    }

      //get sum of total psales
  async function sumTotalSales() {
    try {
      const response = await api.get(`sale/count`,)
      return response?.data;
    } catch (error) {

      throw error?.response?.data || error;
    }
  }

      //get total sale
      async function getRecentSales() {
        try {
          const response = await api.get(`sale/recent`)
          return response?.data;
        } catch (error) {
    
          throw error?.response?.data || error;
        }
      }


    //get total sale
    async function getSales() {
      try {
        const response = await api.get(`sale`)
        return response?.data;
      } catch (error) {
  
        throw error?.response?.data || error;
      }
    }

        //get total sale
        async function getDailySales({ queryKey: [_, salesDate] }) {
          try {
            const response = await api.get(`sale/daily/${salesDate}`,)
            return response?.data;
          } catch (error) {
      
            throw error?.response?.data || error;
          }
        }

                //sum Daily sales
        async function sumDailySales() {
          try {
            const response = await api.get(`sale/daily/sum`)
            return response?.data;
          } catch (error) {
      
            throw error?.response?.data || error;
          }
        }

    //post sale
    async function postSale(payload) {
      try {
        return await api.post(`sale`, payload)
        // return response?.data;
      } catch (error) {
  
        throw error?.response?.data || error;
      }
    }

  //get central stores
  async function getPurchases() {
    try {
      const response = await api.get(`purchase`)
      return response?.data;
    } catch (error) {

      throw error?.response?.data || error;
    }
  }

  //get single purchase
  async function getSinglePurchase({ queryKey: [_, id] }) {
    try {
      const response = await api.get(`purchase/${id}`,)
      return response?.data;
    } catch (error) {

      throw error?.response?.data || error;
    }
  }

  //get sum of total purchases
  async function sumTotalPurchase() {
    try {
      const response = await api.get(`purchase/count`,)
      return response?.data;
    } catch (error) {

      throw error?.response?.data || error;
    }
  }

  //get Inventory
  async function getInventory() {
    try {
      const response = await api.get(`inventory`,)
      return response?.data;
    } catch (error) {

      throw error?.response?.data || error;
    }
  }

  //get Inventory Item/Product
  async function getInventoryItem({ queryKey: [_, id] }) {
    try {
      const response = await api.get(`inventory/${id}`,)
      return response?.data;
    } catch (error) {

      throw error?.response?.data || error;
    }
  }

    //update Inventory Item/Product price
    async function updatePrice(payload) {
      try {
        return await api.put(`inventory/price/${payload?.id}`, payload)
      } catch (error) {
  
        throw error?.response?.data || error;
      }
    }

  //update new arrivals
  async function updateArrival(payload) {
    try {
      return await api.put(`purchase/newarrival/${payload?.id}`, payload)
    } catch (error) {
      throw error?.response?.data || error;
    }
  }



  return {
    PostPurchase,
    getPurchases,
    getSinglePurchase,
    sumTotalPurchase,
    getInventory,
    getInventoryItem,
    updateArrival,
    updatePrice,
    getSales,
    postSale,
    sumTotalSales,
    getSingleSale,
    getDailySales,
    sumDailySales,
    getRecentSales
  }
}

// Create a singleton instance of the API service
export const TransactionApis = transactionApiServices();

export const useSales = () => {
  const { isLoading, data, isError, error, refetch, isFetching } = useCustomQuery({
    queryKey: ["getSales",],
    queryFn: TransactionApis.getSales,
  });

  return {
    isLoading,
    data,
    error,
    isError,
    refetch,
    isFetching
  }
};

export const SumDailySales = () => { 
  const { isLoading, data, isError, error, refetch, isFetching } = useCustomQuery({
    queryKey: ["sumDailySales",],
    queryFn: TransactionApis.sumDailySales,
  });

  return {
    isLoading,
    data,
    error,
    isError,
    refetch,
    isFetching
  }
}
export const useDailySales = (salesdate) => {
  // console.log(salesdate)
  const { isLoading, data, isError, error, refetch, isFetching } = useCustomQuery({
    queryKey: ["getDailySales", salesdate],
    queryFn: TransactionApis.getDailySales,
    options: {
      enabled: !!salesdate
    }
  });

  return {
    isLoading,
    data,
    error,
    isError,
    refetch,
    isFetching
  }
}

export const useSumSales = () => {
  const { isLoading, data, isError, error, refetch, isFetching } = useCustomQuery({
    queryKey: ["useSumTotalSales",],
    queryFn: TransactionApis.sumTotalSales,
  });

  return {
    isLoading,
    data,
    error,
    isError,
    refetch,
    isFetching
  }
};


export const useSingleSale = (id) => {
  const { isLoading, data, isError, error, refetch, isFetching } = useCustomQuery({
    queryKey: ["getSingleSale", id],
    queryFn: TransactionApis.getSingleSale,
    options: {
      enabled: !!id,
      refetchOnWindowFocus:false
    },
    
    
  });

  return {
    isLoading,
    data,
    error,
    isError,
    refetch,
    isFetching
  }
};


export const usePurchases = () => {
  const { isLoading, data, isError, error, refetch, isFetching } = useCustomQuery({
    queryKey: ["getPurchases",],
    queryFn: TransactionApis.getPurchases,
  });

  return {
    isLoading,
    data,
    error,
    isError,
    refetch,
    isFetching
  }
};

export const useSinglePurchase = (id) => {
  const { isLoading, data, isError, error, refetch, isFetching } = useCustomQuery({
    queryKey: ["getSinglePurchase", id],
    queryFn: TransactionApis.getSinglePurchase,
    options: {
      enabled: !!id
    }
  });

  return {
    isLoading,
    data,
    error,
    isError,
    refetch,
    isFetching
  }
};

export const useSumTotal = () => {
  const { isLoading, data, isError, error, refetch, isFetching } = useCustomQuery({
    queryKey: ["useSumTotal",],
    queryFn: TransactionApis.sumTotalPurchase,
  });

  return {
    isLoading,
    data,
    error,
    isError,
    refetch,
    isFetching
  }
};

export const useInventory = () => {
  const { isLoading, data, isError, error, refetch, isFetching } = useCustomQuery({
    queryKey: ["useInventory"],
    queryFn: TransactionApis.getInventory,
  });

  return {
    isLoading,
    data,
    error,
    isError,
    refetch,
    isFetching
  }
};

export const useRecentSales = () => {
  const { isLoading, data, isError, error, refetch, isFetching } = useCustomQuery({
    queryKey: ["useRecentSales"],
    queryFn: TransactionApis.getRecentSales,
  });

  return {
    isLoading,
    data,
    error,
    isError,
    refetch,
    isFetching
  }
};


export const useInventoryItem = (id) => {
  const { isLoading, data, isError, error, refetch, isFetching } = useCustomQuery({
    queryKey: ["useInventoryItem", id],
    queryFn: TransactionApis.getInventoryItem,
    options: {
      enabled: !!id
    }
  });

  return {
    isLoading,
    data,
    error,
    isError,
    refetch,
    isFetching
  }
};