import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom"
import { InputText, } from 'primereact/inputtext';
// import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import toast from 'react-hot-toast';
// import {login} from 'src/services/apis/users'
// import { useMutation, } from "@tanstack/react-query";
// import CustomImage from 'src/shared/ImageLoader/Image';
import InputField from '../shared/InputField';
import LandingIntro from './LoginIntro';


export default function Login () {
    const navigate = useNavigate()
      const [formField, setForm] = useState({
        email:"uzorvicky@yahoo.com",
        password:"12345678",
        toggle:false,
        isLoading:false
      })
    
      const handleChanges = (e) => {
        const {name, value} = e.target
    
        setForm((prev) => {
          return {
            ...prev,
            [name]: value
          }
        })
      }
    
    
    
    //   const { mutateAsync, isPending} = useMutation({
    //     mutationFn: (payload) => login(payload),
    //     onSuccess: (data) => {
    //       if(data.status) {
    //       toast.success(data?.message)
    
    //       localStorage.setItem("authToken", JSON.stringify(data?.data?.token))
    //       localStorage.setItem('webToken', JSON.stringify(data?.data?.user))
    //       navigate('/dashboard',{replace:true})
    //       }
    //     },
    //     onError: (error) => {
    //       console.log(error)
    //       toast.error(error?.message || 'Error occured')
    //     },
    //   });  
      const handleSubmit = async (e) => {
        e.preventDefault();
        if(email.trim() === '' || password.trim() === '') {
          return toast.error('email and Password field required!')
        }
        const payload = {email, password}
        navigate('/dashboard',{replace:true})
        // await mutateAsync(payload)
    
      }
    
      const {password, email, toggle,} = formField
      return (
        <div className={`flex flex-row items-center justify-content-center h-screen w-screen bg-slate-300 surface-card overflow-hidden overflow-y-auto`}  >
        <div className='hidden md:block //sm:w-6  lg:w-7  w-full text-center'>
        <LandingIntro />
        </div>
      <form onSubmit={handleSubmit} className="w-12 shadow-sm px-2 md:px-5 pt-0 mt-0 border-r-2 sm:px-6 md:w-5 lg:w-5 h-full overflow-hidden overflow-y-auto bg-white">
      <div className='flex flex-column justify-center text-content w-full h-max'>
      {/* <div className='mx-auto h-45 w-45 flex flex-wrap  overflow-hidden'>
        <CustomImage 
        alt="Image" 
        width="90" 
        height="90"
        src="https://res.cloudinary.com/dml9olhsf/image/upload/v1710144241/logo-color_xd3jvt.png" />
    
      </div> */}
      <h2 className="text-xl text-gray-600 text-center font-bold">Welcome back!</h2>
      </div>
    
      <div className="mt-4 flex flex-column justify-content-between w-full">
      <div className="flex justify-content-between">
        <label className="block text-gray-700 text-md font-bold mb-2">
          Username/Email
        </label>
      </div>
      <InputField
      icon={<i className="pi pi-envelope mr-2" />}
        type="text"
        name="email"
        value={email}
        onChange={handleChanges}
        placeholder={"Enter valid Email"}
        autoComplete='false'
      />
      </div>
    
      <div className="mt-4 flex flex-column w-full"> 
      <div className="flex justify-between">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
      </div>
      <div className='p-input-icon-left align-items-center  min-w-fit mb-2 md:mb-5 border-1 border-gray-300 border-round-sm p-2 flex flex-row'>
      <i className="pi pi-unlock mr-2 vertical-align-middle " />
      <div className="p-input-icon-right flex w-full lg:min-w-full relative align-items-center">
      <i onClick={()=> setForm((prev) => { return { ...prev, toggle: !toggle}})} className={`absolute right-0 bottom-2 top-1.5 pi ${toggle ? "pi-eye-slash":"pi-eye"} cursor-pointer `}/>
       <InputText
        pt={{root:'border-none shadow-none ml-4 md:ml-4 focus:bg-white outline-none focus:border-none text-gray-700 ',}}
        className="text-gray-700  w-full border-0 outline-none bg-white border-none focus:bg-white focus:ring-0 focus:outline-none focus:border-none "
        type={toggle ? "text":"password"}
        name="password"
        placeholder='Enter Password'
        onChange={handleChanges}
        value={password}
      />
      </div>
      
      </div>
    <div className='flex flex-column gap-3 md:flex-row justify-content-between //w-full my-2'>
    
      <Link
        to="/account/recovery"
        className="text-sm text-blue-400 hover:text-blue-900 "
      >
        <span>
        Forget Password?
        </span>
     
      </Link>
    </div>
      </div>
    
      <div className="mt-2 md:mt-5 w-full flex">
      <Button 
      label='Login'
    //   loading={isPending}
      type='submit' className="bg-blue-700 text-white font-bold py-3 px-4 w-full border-round-md hover:bg-blue-600"
      />
    
      </div>
      
      </form>
      </div>)
    }
    