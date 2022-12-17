import React,{useState,useEffect} from "react";
import InternalNavBar from '../assets/internalNavBar'

import {
    Outlet,
    Link,
    useLoaderData,
    useActionData,
    redirect,
    useNavigate
} from "react-router-dom";

export default function ControlPanel(){

    const navigate = useNavigate()

    const navigatingControlPanel = (e) => {
        if(e.target.id === "logout"){
            sessionStorage.setItem('token',"")
            navigate('/login')
        }
        if(e.target.id === "profile"){
            navigate('/controlpanel/profile')
        }
    }

    const loadData = () => {
        
    }

    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            // get all the data
            loadData()
        }else{
            navigate('/login')
        }
    },[])
    
    return(
        <div>
            <p id="logout" onClick={navigatingControlPanel}>Logout</p>
            <InternalNavBar/>

        </div>
    )
}


