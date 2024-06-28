import { Button } from 'primereact/button';
import { InputText, } from 'primereact/inputtext';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, } from "@tanstack/react-query";
import { resetPassword } from 'src/services/apis/users'
import { isValidEmail } from 'src/utils'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useSessionStorage } from 'primereact/hooks';
import InputField from 'src/shared/InputField';



export default function Recovery() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [resetEmail, setResetEmail] = useSessionStorage(email, 'resetEmail');


  //reset EMail
  const { mutateAsync, isPending } = useMutation({
    mutationFn: (payload) => resetPassword(payload),
    onSuccess: (data) => {
      if (data?.status) {
        setResetEmail(email)
        toast.success(data?.message)
        navigate("/account/recovery/verify", { replace: true })
      }
    },
    onError: (error) => {
      console.log(error)
      toast.error(error?.message || 'Error occured')
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (email.trim() === '') {
      return toast.error('Please enter email')
    }
    if (!isValidEmail(email)) {
      return toast.error('Please enter email')
    }
    // await mutateAsync({ email })
  }
  return <div className="surface-ground w-screen h-screen overflow-hidden flex flex-wrap gap-3 align-items-center p-0 ">
    <div className='surface-card h-screen hidden md:block  lg:w-6 forgot_password_background  border-right-1 border-gray-300 w-7 p-0'>
     
    </div>
    <div className="shadow-6 p-5 border-round-md flex flex-column surface-card mx-auto">
      <span className="font-bold text-md">Forgot Password ?</span>
      <span className="text-sm mt-3">No problem recovery your account immediately</span>
      <form className="w-full" onSubmit={handleSubmit}>
        <div className="flex flex-column gap-2 my-5 md:my-3 w-full ">
          <label htmlFor="email">Email</label>
            <InputField
              type="text"
              icon={<i className="pi pi-envelope mr-2" />}
              name="email"
              value={email}
              placeholder={"Enter Email"}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete='false'
            />
        </div>
        <div className='w-full flex flex-row justify-content-between'>
          <Link to="/login" className="p-button bg-white no-underline  text-yellow-500 border-yellow-500  font-bold">Cancel</Link>
          <Button label="Submit" severity="info" raised type='submit'  
          loading={isPending}
           />
        </div>
      </form>
    </div>
  </div>
}