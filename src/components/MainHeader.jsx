import React, { useEffect, useState } from "react";
import { Avatar } from 'primereact/avatar';
import { Menu } from 'primereact/menu';
import { Button } from "primereact/button";

function MainHeader({setVisible, open}) {
  const [userRoles, setRoles] = useState([])

  const roleMenu = React.useRef(null);
let user = React.useRef(JSON.parse(localStorage.getItem('webToken')))


useEffect(()=>{
  if(user.current) {
    const userRole = user.current?.role?.map((x) => {
      return {label:x?.name|| 'Unknown'}
    })
    setRoles(userRole)
  }
},[user.current])



  return (
    <div className="bg-slate-500 border-bottom-1 shadow-gray-300 border-l //h-15rem flex items-center justify-content-center flex-wrap min-w-fit">
      <div className="flex flex-col md:flex-row align-content-center justify-content-between gap-2 min-w-fit w-full items-center p-2">
        <div className=" px-1 align-content-center">
          <span className="pi pi-bars block" style={{color:"#000"}} onClick={() => setVisible(!open)}></span>
          </div>
 
        <div className="flex flex-wrap align-content-center gap-1 gap-x-2 md:gap-2 md:gap-x-5 align-middle px-1">
          
          <Button  severity="warning" 
          outlined 
          label={`${user.current?.firstname||''} ${user.current?.lastname||'N/A'}`}
          iconPos="left" icon="pi pi-users"
          onClick={(event) => roleMenu.current.toggle(event)} 
          aria-controls="popup_menu" aria-haspopup />
           <Menu
            pt={{root:"w-fit h-fit"}}
            model={userRoles} 
            popup 
            ref={roleMenu} 
            id="popup_menu" 
            popupAlignment="bottom" />

<Avatar shape="circle"  
image={"https://res.cloudinary.com/dml9olhsf/image/upload/v1710144241/logo-color_xd3jvt.png"} 
size="large" 
/>
        
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
