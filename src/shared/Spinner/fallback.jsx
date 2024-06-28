import Spinner from './index'
import React from "react";
export default function Fallback () {
    return (<div className="h-screen w-screen justify-content-center items-center align-items-center flex">
    <Spinner  size={50} color={"#000"} />
    </div>)
}