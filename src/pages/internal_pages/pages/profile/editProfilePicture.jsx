<<<<<<< HEAD
import React,{useEffect,useState} from "react";
=======
import React,{useState,useEffect} from "react";
>>>>>>> 5c71fb210ef8eeb2f4ad51a2525e44619e3ff6b4
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { IKImage, IKContext, IKUpload } from 'imagekitio-react';
import { Dropdown } from "bootstrap";
import { First } from "react-bootstrap/esm/PageItem";




export default function EditProfilePicture(tools){
    console.log("EDITING PROFILE PICTURE!!")
    const [displayImage,setDisplayImage] = useState(tools.currentValue);

<<<<<<< HEAD
    const [displayPicture,setDisplayPicture] = useState(tools.currentValue);

    const ikcontentData = {
        publicKey: 'public_k0o7zbOkiFy8QSCxNMDgntAvLxg=',
        urlEndpoint: 'https://ik.imagekit.io/uhtx1amtt',
        authenticationEndpoint: `https://back-end-real-estate-2.herokuapp.com/profile/imagekitauthentication?token=${sessionStorage.getItem('token')}`
    }
    
    const onSuccess = (e) => {
        // Delete previous profile piicture using previous file iid
        // Once succeeded, update localStorage with the current fileId
        // Set display picture with fileId. 
        console.log("HELLOOOOOOO")
        console.log(e)
        fetch(`https://back-end-real-estate-2.herokuapp.com/profile/deleteProfilePicture?fileId=${localStorage.getItem('uploaded')}&token=${sessionStorage.getItem('token')}`,{
            method: 'delete'
        })
        .then(res=>{
            
            setDisplayPicture(e.filePath)
        })
        .catch(err=>{
            console.log("ERROR WIITH DELETIING IMAGE...")
            console.log(err)
        })
    }

    const onError=(e)=> {
        console.log("UPLOAD IMAGE ERROR: ",e)
    }

    useEffect(()=>{
        
        if(!tools.currentValue){
            setDisplayPicture("/ENTJ_Male_Rngu9OYs2.jpg")
        }
=======
    const imagekitData = {
        publicKey: "public_k0o7zbOkiFy8QSCxNMDgntAvLxg=",
        urlEndpoint: "https://ik.imagekit.io/uhtx1amtt",
        authenticationEndpoint: `https://back-end-real-estate-2.herokuapp.com/profile/imagekitauthentication?token=${sessionStorage.getItem('token')}`,
    }

    const onSuccess = (e) => {
        const fileId = e.fileId;
        const filePath = e.filePath;
        const token = sessionStorage.getItem('token')
        // EVERY TIME I UPLOAD, THERE SHOULD ONLY BE ONE IMAGE IN IMAGEKIT.
        const previousImageId = localStorage.getItem('uploaded');
        // IF THERE IS A PREVIOUS IMAGE TO DELETE
        if(previousImageId){
            // Delete image
            fetch(`https://back-end-real-estate-2.herokuapp.com/profile/deleteProfilePicture?token=${token}&fileId=${localStorage.getItem('uploaded')}`,{method: 'delete'})
            .then(res=>{
                return(res.json());
            })
            .then(res=>{
                if(res.outcome){
                    localStorage.setItem('uploaded',fileId);
                    setDisplayImage(filePath);
                }
            })
        // IF THERE IS NO PREVIOUS IMAGE TO DELETE
        }else{
            localStorage.setItem('uploaded',fileId);
            setDisplayImage(filePath);
        }
    }

    const onError = (e) => {
        console.log(e)
    }

    useEffect(()=>{
        console.log("DISPLAYING: ",displayImage)
>>>>>>> 5c71fb210ef8eeb2f4ad51a2525e44619e3ff6b4
    },[])

    return(
        
        <div className="position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center" style={{'backdropFilter': 'blur(2px)'}}>
            <div className="border border-danger w-50 h-50 p-4">
<<<<<<< HEAD
                <IKImage className="w-75 h-75" urlEndpoint={'https://ik.imagekit.io/uhtx1amtt/'} path={displayPicture}/>
                <IKContext publicKey={ikcontentData.publicKey} urlEndpoint={ikcontentData.urlEndpoint} authenticationEndpoint={ikcontentData.authenticationEndpoint}>
=======
                <IKImage className="w-75 h-75" urlEndpoint={'https://ik.imagekit.io/uhtx1amtt/'} path={displayImage}/>
                <IKContext publicKey={imagekitData.publicKey} urlEndpoint={imagekitData.urlEndpoint} authenticationEndpoint={imagekitData.authenticationEndpoint}>
>>>>>>> 5c71fb210ef8eeb2f4ad51a2525e44619e3ff6b4
                    <IKUpload onSuccess={onSuccess} onError={onError}></IKUpload>
                </IKContext>
                <p>Edit Profile Picture</p>
                <Button onClick={tools.back}>Cancel</Button>
<<<<<<< HEAD
                <Button onClick={()=>{tools.saveChange(localStorage.getItem('uploaded'),displayPicture)}}>Save</Button>
=======
                <Button onClick={()=>{tools.saveChange(displayImage)}}>Save</Button>
>>>>>>> 5c71fb210ef8eeb2f4ad51a2525e44619e3ff6b4
            </div>
        </div>
        
    
    )
}


