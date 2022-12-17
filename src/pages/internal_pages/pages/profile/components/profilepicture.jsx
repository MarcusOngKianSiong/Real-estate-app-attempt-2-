<<<<<<< HEAD
import React,{useEffect,useState} from "react";
=======
import React,{useState,useEffect} from "react";
>>>>>>> 5c71fb210ef8eeb2f4ad51a2525e44619e3ff6b4
import { IKImage, IKContext, IKUpload } from 'imagekitio-react';
import Button from 'react-bootstrap/Button'

export default function ProfilePicture(tools){
<<<<<<< HEAD

    const [imagePath,setImagePath] = useState(tools.value)
    
    useEffect(()=>{
        console.log(tools.value)
        console.log("HELOOOOOO: " ,tools.value)
        if(tools.value === undefined || tools.value === null || tools.value === ""){
            setImagePath("/ENTJ_Male_Rngu9OYs2.jpg")
        }else{
            setImagePath(tools.value)
        }
    },[])

    return(
        <div>
            <IKImage urlEndpoint={'https://ik.imagekit.io/uhtx1amtt/'} path={imagePath}/>
=======
    

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
>>>>>>> 5c71fb210ef8eeb2f4ad51a2525e44619e3ff6b4
            <div>Profile Picture</div>
            <Button id="editProfilePicture" onClick={(e)=>{tools.editData(e.target.id,tools.value)}}>Edit</Button>
        </div>
        
    )
}