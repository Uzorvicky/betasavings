import { InputText } from 'primereact/inputtext';
import React from 'react';
export default function InputField ({disabled, type, isLoading, inputClassName, onBlur, name, value, onChange, icon, placeholder, autoComplete, props}) {

    return (  <div className='p-input-icon-left  w-full //w-fit mb-3 border-1 border-gray-300 border-round-sm py-1 px-2 flex'>
   {isLoading ? <i className='pi pi-spinner mr-2'></i> : icon || <i className="pi pi-user mr-2" /> }
    <InputText
    pt={{root:'border-0 shadow-none hover:border-none  ml-3 md:ml-3 focus:bg-white outline-none  text-gray-800 focus:ring-0 focus:outline-none w-full',}}
      className={`text-gray-700  w-full border-0 outline-none bg-white border-none focus:bg-white focus:ring-0 focus:outline-none focus:border-none ${inputClassName}`}
      type={type || 'text'}
      name={name}
      value={value}
      onBlur={onBlur}
      disabled={disabled}
      onChange={onChange}
      autoComplete={autoComplete || "false"}
      placeholder={placeholder|| 'Enter Text'}
      {...props}
    />
    </div>)
}


export  function InputAddon ({disabled, type, name, value, onChange, icon, placeholder, autoComplete, props}) {

  return (  <div className='p-inputgroup flex-1  w-full  border-1 border-gray-300 border-round-sm   p-0  '>
 {icon && <span className="p-inputgroup-addon border-none border-right-1 border-gray-300 rounded-none text-small align-content-center">
        {icon}
</span> }
  <InputText
  
  pt={{
    root:'border-none shadow-none hover:border-none  ml-4 md:ml-4 focus:bg-white outline-none focus:border-none text-gray-700  w-full',
    }}
    className="text-gray-700  w-full border-0 outline-none bg-white border-none focus:bg-white focus:ring-0 focus:outline-none focus:border-none "
    type={type || 'text'}
    name={name}
    value={value}
    disabled={disabled}
    onChange={onChange}
    autoComplete={autoComplete || "false"}
    placeholder={placeholder|| 'Enter Text'}
    {...props}
  />
  </div>)
}

export  function InputGroup ({disabled, type, ref, name, value, onChange, icon, placeholder, autoComplete, props, btn}) {

  return (  <div className='p-input-icon-left  w-full  mb-2 border-1 border-gray-300 border-round-sm   py-1 px-2 flex'>
  {icon || <i className="pi pi-user mr-2" /> }
  <InputText
  pt={{root:'border-none shadow-none ml-4 md:ml-4 focus:bg-white outline-none focus:border-none text-gray-700  w-full',}}
    className="text-gray-700  w-full border-0 outline-none bg-white border-none focus:bg-white focus:ring-0 focus:outline-none focus:border-none "
    type={type || 'text'}
    name={name}
    value={value}
    disabled={disabled}
    ref={ref}
    onChange={onChange}
    autoComplete={autoComplete || "false"}
    placeholder={placeholder|| 'Enter Text'}
    {...props}
  />
    {btn && <span className="p-inputgroup-addon bg-transparent p-0 m-0 border-0">
        {btn} </span> }
  </div>)
}