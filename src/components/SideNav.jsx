import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { Avatar } from 'primereact/avatar';
import { PanelMenu } from 'primereact/panelmenu';
import { Menu } from 'primereact/menu';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';



export default function SideNav ({open, setOpen}) {
    const navigate = useNavigate()
const [device, setDevice] = useState(useDeviceWidth())


  const items = [{
    template:() => {
        return (<div className='h-fit min-h-23rem surface-card gap-3 w-full shadow-4 justify-center flex flex-column overflow-hidden p-1 '>
        {/* <CustomImage 
        alt="Image" 
        width="140" 
        height="140"
        src="https://res.cloudinary.com/dml9olhsf/image/upload/v1710144241/logo-color_xd3jvt.png" /> */}
        <span className='font-bold text-lg'>Admin</span>
        <span>Ogechi Amanda</span>
        </div> 
        )
    }
  }, 
    {
      label: 'Dashboard',
      icon: 'pi pi-th-large',
      items: [
          {
              label: 'home',
              icon: 'pi pi-desktop',
              command: () => {
                  navigate('/dashboard',{replace:true});
              }
          },
          {
              label: 'mails',
              icon: 'pi pi-envelope',
              command: () => {
                  navigate('/dashboard/mails',{replace:true});
              }
          },
          
      ]
  },
  {
      label: 'Savings',
      icon: 'pi pi-qrcode',
      items: [
          {
              label: 'Contribution',
              icon: 'pi pi-chart-line',
              command: () => {
                  navigate('/dashboard/contribution',{replace:true});
              }
              
          },
          {
              label: 'Loans',
              icon: 'pi pi-shopping-cart',
              command: () => {
                  navigate('/dashboard/loans',{replace:true});
              }
          }
      ]
  },
  {
    label: 'Reports',
    icon: 'pi pi-chart-bar',
    items: [
        {
            label: 'Loan Reports',
            icon: 'pi pi-envelope',
            command: () => {
                navigate('/dashboard/loans',{replace:true});
            }
        },
        {
            label: 'Statistics',
            icon: 'pi pi-chart-bar',
            command: () => {
                navigate('/dashboard/statistics',{replace:true});
            }
        },
        {
          label: 'Contribution',
          icon: 'pi pi-receipt',
          command: () => {
            navigate('/dashboard/contributions',{replace:true});
        }
      }
    ]
  },
  {
    label: 'Members',
    icon: 'pi pi-users',
    items: [
        {
            label: 'All',
            icon: 'pi pi-users',
            command: () => {
              navigate('members',{replace:true});
          }
        },
    ]
  },
  {
    label: 'Settings',
    icon: 'pi pi-cog',
    items: [
        {
          label: 'Profile',
          icon: 'pi pi-user',
          command: () => {
            navigate('/dashboard/profile',{replace:true});
        }
       },
    ]
  }, {
    template: () => {
        return (<div className='w-full py-2'>
            <Button className='w-full'
        onClick={() =>Logout()}  label='Logout' raised severity='danger' iconPos='left' icon="pi pi-power-off" />
         </div>)}
  }
  ]

useEffect(() => {
    const handleResize = () => {
        // setDeviceWidth(window.innerWidth);
     let   width = window.innerWidth
        if (width < 768) {
            return setDevice('small'); // Small devices (phones)
        }
         else if (width >= 768 && width < 992) {
            return setDevice('medium'); // Medium devices (tablets)
        } 
        else 
        {
            return setDevice('large'); // Large devices (desktops)
        }
    };

    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, [open]);

function useDeviceWidth() {
    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setDeviceWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    // Memoize the device width to avoid unnecessary recalculations
    const width = useMemo(() => deviceWidth, [deviceWidth]);

    // console.log(width)
    if (width < 768) {
        return'small'; // Small devices (phones)
    }
     else if (width >= 768 && width < 992) {
        return 'medium'; // Medium devices (tablets)
    } 
    else 
    {
        return 'large'; // Large devices (desktops)
    }
// };
    
}

const Logout = () => {
    navigate('/logout',);
}


switch (device) {
    case 'small':
    return (
     <PanelMenu 
     model={items} 
    pt={{root:"w-14rem //w-full min-h-fit //h-screen surface-card //surface-ground",
}}
     />
     
)
  case 'medium':
    return (
        <PanelMenu 
        model={items} 
       pt={{root:"w-14rem //w-full min-h-fit //h-screen surface-card //surface-ground",
   }}
        />
   )
    
    case 'large':
        default:
        return (<PanelMenu model={items} 
            pt={{
                root:"h-screen bg-transparent border-noround w-full",
                panel:"border-noround mx-0 px-0",
                PanelMenu:"px-1 border-noround",
                headerLabel:"text-black w-fit",
                headerIcon:"h-0.8rem w-.08rem",
                menuContent:"border-noround px-1 mx-0"}} />  
                     )
}

}
