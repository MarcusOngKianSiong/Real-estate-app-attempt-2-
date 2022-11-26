import React,{useEffect,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    useNavigate
  } from "react-router-dom";


export default function NavBar(){
    
    const navigate = useNavigate();
    
    useEffect(()=>{
        
    },[])
    
    return(
        <div>
            <Link to={"/"} className="m-2">Saved homes</Link>
            <Link to="/" className="m-2">Saved searches</Link>
            <Link to="/" className="m-2">Your home</Link>
            <Link to="/profile" className="m-2">Profile</Link>
            
        </div>    
    );
}

