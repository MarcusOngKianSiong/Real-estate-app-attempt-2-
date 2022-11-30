import React,{useEffect,useState} from "react";
import InternalNavBar from '../../../assets/internalNavBar'
import {useNavigate} from 'react-router-dom'
import ProfilePicture from './components/profilepicture';
import EditPlatform from "./editPlatform";
import EditProfilePicture from './editProfilePicture'
import TextComponent from './components/textComponents'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Profile(){
    
    const navigate = useNavigate()

    const [editPlatform,setEditPlatform] = useState(null)

    const [formData,setFormData] = useState({
        profilePicture: "",
        name: "",
        email: "",
        contact: ""
    })
    
    const loadData = () => {
        const token = sessionStorage.getItem('token')
        fetch(`http://localhost:3005/profiledata?token=${token}`)
        .then(res=>{
            return res.json()
        })
        .then(res=>{
            if(res.outcome){
                console.log(res)
                setFormData(res.data)
            }
        })
    }

    const cancelEdit = () => {
        setEditPlatform(null)
    }

    const saveChangesToData = (fieldName,newData) => {
        const token = sessionStorage.getItem('token')
        fetch(`http://localhost:3005/changeProfileData?token=${token}&fieldName=${fieldName}&newData=${newData}`,{method: 'post'})
        .then(res=>{
            return res.json()
        })
        .then(res=>{
            if(res.outcome){
                loadData()
                cancelEdit()
            }
        })
    }

    

    const editData = (fieldName,fieldData) => {
        if(fieldName === "editProfilePicture"){
            setEditPlatform(<EditProfilePicture fieldName={fieldName} currentValue={fieldData} saveChange={saveChangesToData} back={cancelEdit}/>)
        }else{
            setEditPlatform(<EditPlatform fieldName={fieldName} currentValue={fieldData} saveChange={saveChangesToData} back={cancelEdit}/>)
        }

        
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
            {editPlatform}
            <InternalNavBar/>
            <ProfilePicture value={formData.profilePicture} editData={editData}/>
            <Form>
                <TextComponent fieldName={"Name"} value={formData.name} editData={editData}/>
                <TextComponent fieldName={"Email"} value={formData.email} editData={editData}/>
                <TextComponent fieldName={"Contact"} value={formData.contact} editData={editData}/>
            </Form>
        </div>
        
    )
}