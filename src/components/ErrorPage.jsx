import { useNavigate, Link, } from "react-router-dom"
import React from "react"
export default function ErrorPage ({link}) {
const navigate = useNavigate()
    return (
    <div className='relative flex flex-column justify-content-center items-center w-full gap-4 px-4 md:px-20 xl:px-40 md:gap-5'>
        <h1 className='text-9xl md:text-[300px] w-full select-none  text-center font-bold  text-black dark:text-[#373A40]  '>
            404</h1>
            <div className="m-auto flex flex-column justify-content-center ">
            <p className='text-3xl font-bold uppercase text-center'>Oops!, this is a 404 page.</p>
        <p className='text-2xl font-medium break-words text-dull'> You may have
            mistyped the address, or the page has been moved to another URL.</p>

            <div className='flex flex-column justify-content-between w-full gap-4 md:flex-row md:gap-8 xl:px-8 mt-4'>
            <a to="#" onClick={ () => navigate(-1)}
                className='flex items-center justify-center border-round-md w-full gap-4 p-3 font-semibold capitalize border-1 border-blue-500 rounded shadow-lg md:w-fit cursor-pointer hover:bg-blue-500 hover:text-white md:p-4 focus:outline-none hover:scale-105 active:scale-90 hover:shadow-xl '>
                <span className="pi pi-arrow-left"></span>
                Go back to Previous Page
            </a>
            <Link to={link || "/"}
                className='flex w-full border-round-md md:w-fit group items-center gap-4 justify-center border-1 text-green-400 border-green-500 font-semibold hover:bg-green-500 hover:text-white cursor-pointer p-3 md:p-4 capitalize focus:outline-none hover:scale-105 active:scale-90 shadow-lg hover:shadow-xl '>
                Go back to Home Page
                <span className="pi pi-arrow-right"></span>
            </Link>
        </div>
            </div>
       

    </div>
)
}