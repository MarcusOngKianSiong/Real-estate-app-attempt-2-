import React,{useEffect,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link
} from "react-router-dom";


export default function NavBar(){
    
    

    useEffect(()=>{
        
    },[])

    return(
        <div>
            <Link to={"/"} className="">Home</Link>
            <Link to="/login">Login</Link>
        </div>    
    );
}

