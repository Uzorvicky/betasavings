import { Navigate } from "react-router-dom";
import {usefetchUser} from 'src/services/apis/users'
import toast from 'react-hot-toast';
import Spinner from 'src/shared/Spinner';
import { Skeleton } from 'primereact/skeleton';

export default function PrivateRoute({children}){

//   const {isLoading, data} = usefetchUser(JSON.parse(localStorage.getItem('webToken'))?._id)

// if(isLoading) {
//     return <Skeleton className="h-screen w-full overflow-hidden  flex justify-content-center  align-items-center">
//             <Spinner  size={40} color="#000" />
//             </Skeleton>
// }

// if(!data) {
//   return (<Navigate to="/logout" replace={true} />)
// }

// // if you have no business attached to you
// if(!data?.data?.business) {
//     toast.error('You have no business profile, create profile!',{duration:3000});
//   return (<Navigate to="/invitation"  />)
// }

// if(data?.status === false) {
//     toast.success(data?.message,{duration:3000})
//     return (<Navigate to="/logout" replace={true} />)
// }

// if(data?.data?.isCompleted  < 100 ) {
//   toast.success('update Profile',{duration:3000});
//   return (<Navigate to="profile" replace={true} />)
// }

return children
};