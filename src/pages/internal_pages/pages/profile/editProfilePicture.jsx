import React from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { IKImage, IKContext, IKUpload } from 'imagekitio-react';

export default function EditProfilePicture(tools){

    

    return(
    
        <div className="position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center" style={{'backdropFilter': 'blur(2px)'}}>
            <div className="border border-danger w-50 h-50 p-4">
                <IKImage className="w-75 h-75" urlEndpoint={'https://ik.imagekit.io/uhtx1amtt/'} path={tools.currentValue}/>
                <IKUpload ></IKUpload>
                <p>Edit Profile Picture</p>
                <Button onClick={tools.back}>Cancel</Button>
                <Button onClick={()=>{tools.saveChange(tools.fieldName,"something")}}>Save</Button>
            </div>
        </div>
        
    
    )
}