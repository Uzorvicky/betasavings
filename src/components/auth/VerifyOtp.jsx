import React, { useState } from 'react';
import OTP from 'src/components/hooks/OTP';
import { useMutation, } from "@tanstack/react-query";
import {resetPassword} from 'src/services/apis/users'
import toast from 'react-hot-toast';
export default function VeriftyOTP () {
    // const [token, setTokens] = useState();


            //reset EMail
  const { mutateAsync, isPending} = useMutation({
    mutationFn: (payload) => resetPassword(payload),
    onSuccess: (data) => {
      if(data?.status) {
      toast.success(data?.message)
      navigate("/account/recovery/verify",{replace:true})
      }
    },
    onError: (error) => {
      console.log(error)
      toast.error(error?.message || 'Error occured')
    },
  }); 
    const resend = async (x) => {
        await mutateAsync({email: x?.email})
    }

    return (<div className="surface-section w-screen h-screen overflow-hidden flex justify-content-center flex-column align-items-center p-0">
        <div className="shadow-6 p-0 md:p-5 border-round-md flex flex-column surface-card //w-full h-max //m-auto">
        <OTP handleResend={(x) => resend(x)} isPending={isPending}/>
        </div>
    </div>)
}