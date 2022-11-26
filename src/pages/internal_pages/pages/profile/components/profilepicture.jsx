import React from "react";
import { IKImage, IKContext, IKUpload } from 'imagekitio-react';
import Button from 'react-bootstrap/Button'

export default function ProfilePicture(tools){
    return(
        <div>
            <IKImage urlEndpoint={'https://ik.imagekit.io/uhtx1amtt/'} path={tools.value}/>
            <div>Profile Picture</div>
            <Button id="editProfilePicture" onClick={(e)=>{tools.editData(e.target.id,tools.value)}}>Edit</Button>
        </div>
        
    )
}