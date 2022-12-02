import React,{useEffect,useState} from "react";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { IKImage, IKContext, IKUpload } from 'imagekitio-react';


export default function EditProfilePicture(tools){

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
    },[])

    return(
        
        <div className="position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center" style={{'backdropFilter': 'blur(2px)'}}>
            <div className="border border-danger w-50 h-50 p-4">
                <IKImage className="w-75 h-75" urlEndpoint={'https://ik.imagekit.io/uhtx1amtt/'} path={displayPicture}/>
                <IKContext publicKey={ikcontentData.publicKey} urlEndpoint={ikcontentData.urlEndpoint} authenticationEndpoint={ikcontentData.authenticationEndpoint}>
                    <IKUpload onSuccess={onSuccess} onError={onError}></IKUpload>
                </IKContext>
                <p>Edit Profile Picture</p>
                <Button onClick={tools.back}>Cancel</Button>
                <Button onClick={()=>{tools.saveChange(localStorage.getItem('uploaded'),displayPicture)}}>Save</Button>
            </div>
        </div>
        
    
    )
}


