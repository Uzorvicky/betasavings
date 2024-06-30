import { Card } from "primereact/card";
import { Skeleton } from 'primereact/skeleton';
import { Menu } from 'primereact/menu';
import React, { useRef, } from 'react';

export default function CustomCard ({title, value, icon, icon_bg, isLoading})   {

    if(isLoading) {
        return (
            <Card className="surface-card shadow-5 p-1 border-round h-full flex flex-column //column-gap-4 row-gap-4">
                <div className="border-round border-1 surface-border p-4 surface-card">
                    <div className="flex mb-3">
                        <Skeleton shape="circle" size="4rem" className="mr-2"></Skeleton>
                        <div>
                            <Skeleton width="10rem" className="mb-2"></Skeleton>
                            <Skeleton width="5rem" className="mb-2"></Skeleton>
                            <Skeleton height=".5rem"></Skeleton>
                        </div>
                    </div>
                    <Skeleton width="100%" height="150px"></Skeleton>
                    <div className="flex justify-content-between mt-3">
                        <Skeleton width="4rem" height="2rem"></Skeleton>
                        <Skeleton width="4rem" height="2rem"></Skeleton>
                    </div>
                </div>
            </Card>
        );
    }

    return (<Card className="surface-card shadow-5 p-1 border-round h-full flex flex-column //column-gap-4 row-gap-4">
    <div className="flex justify-content-between mt-1 ">
        <div>
            <span className="block text-black text-2xl font-bold mb-3">{title || 'Tittle'}</span>
            <div className="text-900 font-medium text-xl">{value}</div>
        </div>
        <div className={`flex align-items-center justify-content-center ${icon_bg || 'bg-gray-100'} border-round`} style={{ width: '3rem', height: '3rem' }}>
          {icon ||  <i className="pi pi-shopping-cart text-blue-500 text-xl"></i> }
        </div>
    </div>
</Card>)
}


export const UserCard = ({title, value, icon, items, icon_bg, isLoading, address})  =>  {
    const menuList = useRef(null);

    if(isLoading) {
        return (
            <div className="border-round border-1 surface-border p-3 surface-card">
                <div className="flex flex-column row-gap-4 gap-3 coloumn-gap-3">
                        <div className="flex justify-content-between mt-2">
                        <Skeleton  width="50%" height="3rem"></Skeleton>
                        <Skeleton shape="circle" width="3rem" height="3rem"></Skeleton>
                        </div>
                    <Skeleton width="60%" height="40px"></Skeleton>
                </div>
            </div>
        );
    }

    return (<Card className="surface-card shadow-5 p-1 border-round h-full flex flex-column //column-gap-4 row-gap-4">
    <div className="flex flex-wrap gap-3 md:flex-row justify-content-between mt-1 ">
        <div>
            <span className="block text-black text-xl md:text-2xl font-bold mb-3">{title || 'Tittle'}</span>
            <div className="text-900 font-medium text-large md:text-2xl">{value}</div>
        </div>
        {items ?
        <div onClick={(event) => menuList.current.toggle(event)} aria-controls="popup_menu" aria-haspopup
        className={`flex align-items-center justify-content-center cursor-pointer ${icon_bg || 'bg-gray-100'} border-round`} style={{ width: '3rem', height: '3rem' }}>
            {icon ||  <i className="pi pi-shopping-cart text-blue-500 text-xl"></i> }
            <Menu pt={{root:'w-fit p-1'}} model={items || []} popup ref={menuList} id="popup_menu" popupAlignment="right" />
        </div> :
        <div className={`flex align-items-center justify-content-center ${icon_bg || 'bg-gray-100'} border-round`} style={{ width: '3rem', height: '3rem' }}>
          {icon ||  <i className="pi pi-shopping-cart text-blue-500 text-xl"></i> }
        </div>}
    </div>
</Card>)
}