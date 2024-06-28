import api from "src/services/api";
// import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { useCustomQuery } from "./init";
function userApiServices() {

  //business Activities
  async function businessActivity() {
    try {
      const response = await api.get(`users/activities`);
      return response?.data;
    } catch (error) {
      throw error?.response?.data || error;
    }
  }

  //user Activities
  async function userActivities(user) {
    try {
      const response = await api.get(`users/activity/${user}`);
      return response;
    } catch (error) {
      throw error?.response?.data || error;
    }
  }
  //post vendor
  async function postVendor(payload) {
    try {
      const response = await api.post(`vendor`, payload);
      return response;
    } catch (error) {
      throw error?.response?.data || error;
    }
  }

  //get vendors
  async function getVendors() {
    try {
      const response = await api.get(`vendor`,);
      return response?.data;
    } catch (error) {

      throw error?.response?.data || error;
    }
  }

  //post customers
  async function postCustomer(payload) {
    try {
      const response = await api.post(`customer`, payload);
      return response;
    } catch (error) {
      throw error?.response?.data || error;
    }
  }

  //get customers
  async function getCustomers() {
    try {
      const response = await api.get(`customer`,);
      return response?.data;
    } catch (error) {

      throw error?.response?.data || error;
    }
  }

  // check invite Email

  async function checkInviteEmail(email) {
    try {
      return await api.get(`users/invite/check/${email}`,);
    } catch (error) {

      throw error?.response?.data || error;
    }
  }

  return {
    postVendor,
    getVendors,
    postCustomer,
    checkInviteEmail,
    getCustomers,
    businessActivity,
    userActivities
  }
}

// Create a singleton instance of the API service
export const userApis = userApiServices();

// export  userApi;

export const resetPassword = async (payload) => {
  return await api.put(`users/auth/verify`, payload)
}

export const verifyOTP = async (payload) => {
  return await api.put(`users/auth/verify/otp/${payload?.email}`, payload)
}

export const inviteStaff = async (payload) => {
  return await api.post(`users/invite/staff`, payload)

}
export const createBranch = async (payload) => {
  return await api.post(`users/branch`, payload)
}



export const createRole = async (payload) => {
  return await api.post(`users/role`, payload)
}

const getRoles = async ({ queryKey: [_,] }) => {
  const resp = await api.get(`users/roles`,)
  return resp?.data
}

export const useGetRoles = () => {
  const { isLoading, data, isFetching } =  useCustomQuery({
    queryKey: ["useGetRoles",],
    queryFn: getRoles,
    refetchOnWindowFocus: false
  });

  return {
    isLoading,
    data,
    isFetching
  }

};

const countUsers = async ({ queryKey: [_,] }) => {
  const resp = await api.get(`users/counts`,)
  return resp?.data
}

export const useCountUsers = () => {
  const { isLoading, data, isError, error, } =
    useCustomQuery({
      queryKey: ["useCountUser"],
      queryFn: countUsers,
    });

  return {
    isLoading,
    data,
    error,
    isError,
  }

};
const getMembers = async ({ queryKey: [_,] }) => {
  const resp = await api.get(`users/members`,)
  return resp?.data
}

export const useGetMembers = () => {
  const { isLoading, data, isError, error, } =  useCustomQuery({
    queryKey: ["getMembers",],
    queryFn: getMembers,
    options:{refetchOnWindowFocus: false}
  });

  return {
    isLoading,
    data,
    error,
    isError,
  }

};

export const updatePersonal = async (payload) => {
  return await api.put(`users/personal`, payload)
}

export const updatePassword = async (payload) => {
  return await api.put(`users/changepassword`, payload)
}

const getUser = async ({ queryKey: [_,] }) => {
  const resp = await api.get(`users/`,)
  return resp?.data
}

export const useGetUser = () => {
  const { isLoading, data, isError, error, } =  useCustomQuery({
    queryKey: ["getUser",],
    queryFn: getUser,
  });

  return {
    isLoading,
    data,
    error,
    isError,
  }
};

const fetchUser = async ({ queryKey: [_, id] }) => {
  const resp = await api.get(`users/auth/${id}`,)
  return resp
}

export const usefetchUser = (id) => {
  const { isLoading, data, isFetching, isError, error, } = useCustomQuery({
    queryKey: ["fetchUser", id],
    queryFn: fetchUser,
    options: {enabled: !!id,}
  });

  return {
    isLoading,
    data,
    error,
    isError,
    isFetching
  }
};
export const checkuserOnboard = async ({ queryKey: [_, email] }) => {
  const resp = await api.get(`users/onboarding/${email}`,)
  return resp
}

export const checkOnboarding = (email) => {
  const { isLoading, data, isFetching, isError, error, isPending, } =  useCustomQuery({
    queryKey: ["checkuserOnboard", email],
    queryFn: checkuserOnboard,
  options: {enabled: !!email,
  refetchOnMount: false,
  refetchOnWindowFocus: false,}
  });

  return {
    isLoading,
    isPending,
    data,
    error,
    isError,
    isFetching
  }
};
export const onboardUser = async (payload) => {
  const resp = await api.post(`users/onboarding/`, payload)
  return resp.data
}
export const login = async (payload) => {
  return await api.post(`users/auth/login`, payload)
}

export const checkPasscode = async ({ queryKey: [_, passcode, email] }) => {
  const res = await api.get(`users/checkpasscode?passcode=${passcode}&email=${email}`);
  return res?.data;
};


export const verifyInvitation = async (payload) => {
  return await api.post(`users/invite/verify`, payload);
};


export const useCheckPasscode = (passcode, email) => {
  const { isLoading, data, isFetching, isError, error, isPending, } =  useCustomQuery({
    queryKey: ["checkPasscode", passcode, email],
    queryFn: checkPasscode,
    options:{enabled: !!passcode && !!email,
    refetchOnMount: false,
    refetchOnWindowFocus: false,}
  });

  return {
    isLoading,
    isPending,
    data,
    error,
    isError,
    isFetching
  }
};

export const inviteAction = async (payload) => {
  const res = await api.put(`users/checkpasscode/${payload.passcode}`, payload);
  return res?.data;
}



export const useGetVendors = () => {
  // 
  let {
    data,
    refetch,
    isLoading,
    isError,
    error
  } = useCustomQuery({
    queryKey: ["getVendors"],
    queryFn: () => userApis.getVendors(),
  });

  ///
  return {
    data,
    vendors: data,
    refetch,
    isLoading,
    error,
    isError
  };
}

export const useGetCustomers = () => {
  let {
    data,
    refetch,
    isLoading,
    isError,
    error
  } = useCustomQuery({
    queryKey: ["getCustomers"],
    queryFn: () => userApis.getCustomers(),
  });

  ///
  return {
    data,
    customers: data,
    refetch,
    isLoading,
    error,
    isError
  };
}



export const useBusinessActivities = () => {
  let {
    data,
    refetch,
    isLoading,
    isError,
    error,
    isFetching
  } = useCustomQuery({
    queryKey: ["useBusinessActivities"],
    queryFn: () => userApis.businessActivity(),
  });

  ///
  return {
    data,
    isFetching,
    refetch,
    isLoading,
    error,
    isError
  };
}


export const useUserActivities = (user) => {
  let {
    data,
    refetch,
    isLoading,
    isError,
    error,
    isFetching
  } = useCustomQuery({
    queryKey: ["useUserActivities"],
    queryFn: () => userApis.userActivities(user),
    options:{
      enabled: !!user
    }
  });

  return {
    data,
    isFetching,
    refetch,
    isLoading,
    error,
    isError
  };
}
