import api from './api';
import { useNavigate, Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import React, {useEffect, useState } from 'react';

export default function AxiosInterceptor (props) {
  // const navigate = useNavigate()
const [reqAuth, setReqAuth] = useState(false)
// console.log("Axios interceptor")
useEffect(() => {
const interceptor = api.instance.interceptors.response.use(undefined,
(error) => {
  console.log(error)
// handled network/connection error
if(error?.message === 'Network Error' || error?.code === 'ERR_NETWORK') {
return toast.error('Please check your network connection',{id: 'axios',})
}

// handled unathorized response
if (error?.response?.status === 401) {
toast.error('Login session has expired, Please sign in',{id: 'axios',})
// localStorage.removeItem('webToken')
// navigate('/login',{replace:true})
setReqAuth(true)
return
}

return Promise.reject(error?.response?.data);
}
);

return () => {api.instance.interceptors.response.eject(interceptor);
}
},[]);

// console.log(reqAuth)

if(reqAuth) {
  return <Navigate to="/login" replace={true} />
}

  return props.children;
};
