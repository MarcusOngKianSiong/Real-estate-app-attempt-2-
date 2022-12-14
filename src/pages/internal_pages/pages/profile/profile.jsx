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
import { getProfile,editProfile, changeProfilePicture } from "../../../../src/links";

export default function Profile(){
    
    const navigate = useNavigate()

    const [editPlatform,setEditPlatform] = useState(null)
    
    const [formData,setFormData] = useState({
        profile_picture_id: "",
        profile_picture_path: "",
        name: "",
        email: "",
        contact: ""
    })
    
    const loadData = () => {
        console.log("LOADING DATA...");
        const token = sessionStorage.getItem('token');
        fetch(`${getProfile}?token=${token}`)
        .then(res=>{
            return res.json();
        })
        .then(res=>{
            console.log('HERE: ',res);
            if(res.outcome){
                console.log(res);
                setFormData(res.profileData);
            }
        })
    }

    const cancelEdit = () => {
        setEditPlatform(null);
    }

    const saveChangesToData = (fieldName,newData) => {
        
        const token = sessionStorage.getItem('token');
        fetch(`${editProfile}?token=${token}&fieldName=${fieldName}&data=${newData}`,{method: 'post'})
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
    
    const saveProfilePictureData = (fileID,filePath) => {
        console.log("RUNNING FUNCTION...")
        const token = sessionStorage.getItem('token')
        // console.log(fileID,filePath)
        console.log("Checking fileid: ",fileID)
        fetch(`${changeProfilePicture}?token=${token}&fileId=${fileID}&filePath=${filePath}`,{
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
    }
    
    const editData = (fieldName,fieldData) => {
        if(fieldName === "editProfilePicture"){
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
            navigate('/login');
        }
    },[])
    
    useEffect(()=>{
        let imagePath = null
        let newForm = {...formData}
        if(formData.profile_picture_path === undefined || formData.profile_picture_path === null || formData.profile_picture_path === ""){
            imagePath = '"/ENTJ_Male_Rngu9OYs2.jpg"'
            newForm.profile_picture_path = imagePath;
            setFormData(newForm)
            console.log("CHECKING FORM: ",formData)
        }
    },[formData])

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