import React from "react";
import PrivateRoute from "../auth";
import Layout from "../layout";
        
export default function Page () {
    return (<PrivateRoute>
        <Layout />
    </PrivateRoute>)
}