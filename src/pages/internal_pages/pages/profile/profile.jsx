import React,{useEffect,useState} from "react";
import InternalNavBar from '../../../assets/internalNavBar'
import {useNavigate} from 'react-router-dom'
import ProfilePicture from './components/profilepicture';
import EditPlatform from "./editPlatform";
import EditProfilePicture from './editProfilePicture'
import TextComponent from './components/textComponents'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { keyboardImplementationWrapper } from "@testing-library/user-event/dist/keyboard";

export default function Profile(){
    
    const navigate = useNavigate()

    const [editPlatform,setEditPlatform] = useState(null)
    
    const [formData,setFormData] = useState({
<<<<<<< HEAD
        profile_picture_id: "",
        profile_picture_path: "",
=======
        profile_picture_path: "",
        profile_picture_id: "",
>>>>>>> 5c71fb210ef8eeb2f4ad51a2525e44619e3ff6b4
        name: "",
        email: "",
        contact: ""
    })
    
    const loadData = () => {
        console.log("LOADING DATA...");
        const token = sessionStorage.getItem('token');
        fetch(`https://back-end-real-estate-2.herokuapp.com/profile/getProfile?token=${token}`)
        .then(res=>{
            return res.json();
        })
        .then(res=>{
            console.log('HERE: ',res);
            if(res.outcome){
                console.log(res);
                setFormData(res.profileData)
                
            }
        })
    }

    const cancelEdit = () => {
        setEditPlatform(null);
    }

    const saveChangesToData = (fieldName,newData) => {
        
        const token = sessionStorage.getItem('token');
        fetch(`https://back-end-real-estate-2.herokuapp.com/profile/editProfileData?token=${token}&fieldName=${fieldName}&data=${newData}`,{method: 'post'})
        .then(res=>{
            return res.json();
        })
        .then(res=>{
            if(res.outcome){
                loadData();
                cancelEdit();
            }
        })
    }
    
<<<<<<< HEAD
    const saveProfilePictureData = (fileID,filePath) => {
        console.log("RUNNING FUNCTION...")
        const token = sessionStorage.getItem('token')
        // console.log(fileID,filePath)
        fetch(`https://back-end-real-estate-2.herokuapp.com/profile/changeProfilePicture?token=${token}&fileId=${fileID}&filePath=${filePath}`,{
            method: 'post'
        })
        .then(res=>{
            console.log("SUCCESSSS")
            return res.json()
        })
        .then(res=>{
            console.log(res)
            if(res.outcome){
                localStorage.setItem('uploaded',"")
                loadData();
                cancelEdit();
            }
        })
        .catch(err=>{
            console.log("ERROR: ",err)
        })
=======
    const saveProfilePictureData = (newPath) => {

        /*
            Two goals:
                1. Delete previous image from imagekit
                2. Store the new image data into the database
                3. Refresh everything.
        */
        const token = sessionStorage.getItem('token');
        const fileId = localStorage.getItem('uploaded');
        const filePath = newPath
        const previousFileId = formData.profile_picture_id;

        // If there is profile image data, delete image from imageKit
        if(formData.profile_picture_id && formData.profile_picture_path){
            fetch(`https://back-end-real-estate-2.herokuapp.com/profile/deleteProfilePicture?token=${token}&fileId=${previousFileId}`)
            .then(res=>{
                return res.json()
            })
            .then(res=>{
                if(res.outcome){
                    console.log("IMAGE KIT IMAGE DELETED....")
                }
            })
        }
        fetch(`https://back-end-real-estate-2.herokuapp.com/profile/changeProfilePicture?token=${token}&fileId=${fileId}&filePath=${filePath}`,{method: 'post'})
            .then(res=>{
                return res.json()
            })
            .then(res=>{
                if(res.outcome){
                    console.log("Upload succeeded")
                }
        })
        loadData()
        cancelEdit()
>>>>>>> 5c71fb210ef8eeb2f4ad51a2525e44619e3ff6b4
    }

    const editData = (fieldName,fieldData) => {
        if(fieldName === "editProfilePicture"){
<<<<<<< HEAD
=======
            console.log("HERE")
>>>>>>> 5c71fb210ef8eeb2f4ad51a2525e44619e3ff6b4
            setEditPlatform(<EditProfilePicture fieldName={fieldName} currentValue={fieldData} saveChange={saveProfilePictureData} back={cancelEdit}/>)
        }else{
            setEditPlatform(<EditPlatform fieldName={fieldName} currentValue={fieldData} saveChange={saveChangesToData} back={cancelEdit}/>)
        }
    }
    
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            // get all the data
            loadData(); 
        }else{
            navigate('/login')
        }
    },[])
    
    return(
        <div>
            {editPlatform}
            <InternalNavBar/>
            <ProfilePicture value={formData.profile_picture_path} editData={editData}/>
            <Form>
                <TextComponent fieldName={"Name"} value={formData.name} editData={editData}/>
                <TextComponent fieldName={"Email"} value={formData.email} editData={editData}/>
                <TextComponent fieldName={"Contact"} value={formData.contact} editData={editData}/>
            </Form>
        </div>
        
    )
}