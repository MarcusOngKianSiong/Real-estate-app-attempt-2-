import React,{useState,useEffect} from "react";
import { IKImage, IKContext, IKUpload } from 'imagekitio-react';
import Button from 'react-bootstrap/Button'

export default function ProfilePicture(tools){
    

    const checkPath = (path) => {
        console.log("something: ",path)
        if(path){
            console.log("Success")
            return path;
        }else{
            console.log("Failed")
            return '/ENTJ_Male_Rngu9OYs2.jpg'
        }
    }
    
    return(
        <div>
            <IKImage urlEndpoint={'https://ik.imagekit.io/uhtx1amtt/'} path={checkPath(tools.value)}/>
            <div>Profile Picture</div>
            <Button id="editProfilePicture" onClick={(e)=>{tools.editData(e.target.id,tools.value)}}>Edit</Button>
        </div>
        
    )
}