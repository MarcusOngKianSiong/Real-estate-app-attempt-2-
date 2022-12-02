import React,{useEffect,useState} from "react";
import { IKImage, IKContext, IKUpload } from 'imagekitio-react';
import Button from 'react-bootstrap/Button'

export default function ProfilePicture(tools){

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
            <div>Profile Picture</div>
            <Button id="editProfilePicture" onClick={(e)=>{tools.editData(e.target.id,tools.value)}}>Edit</Button>
        </div>
        
    )
}