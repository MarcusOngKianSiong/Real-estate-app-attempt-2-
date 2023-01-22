import React,{useState,useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import NavBar from "../assets/navbar";
import { loginLink } from "../../src/links";


import {
    Outlet,
    Link,
    useLoaderData,
    useActionData,
    redirect,
    useNavigate
} from "react-router-dom";

export default function Login(){

    const navigate = useNavigate();
    
    const checkLoggedInOrNot = () => {
        if(sessionStorage.getItem('token')){
            navigate('/controlpanel')
        }
    }
    
    const [formData,setFormData] = useState({
        email: '',
        password: ''
    })
    
    const handleChange = (e) => {
        const fieldName = e.target.type
        const newData = {...formData}
        newData[fieldName] = e.target.value;
        setFormData(newData)
    }

    const handleSubmit = () => {
        fetch(`${loginLink}?email=${formData.email}&password=${formData.password}`,{method: 'post'})
        .then(res=>{
            return res.json();
        })
        .then(res=>{
            if(res.outcome){
                console.log(res)
                sessionStorage.setItem('token',res.token)
                navigate('/controlpanel')
            }else{
                // ERROR
            }
        })
        .catch(res=>{
            //error
        })
    }

    useEffect(()=>{
        checkLoggedInOrNot()
    },[])

    return(
        <div>
            <NavBar/>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={formData.email} onChange={handleChange}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={formData.password} onChange={handleChange}/>
                </Form.Group>
                
                <Button variant="primary" type="button" onClick={handleSubmit}>
                    Submit
                </Button>

                <p><strong>Username:</strong> marcus@gmail.com</p>
                <p><strong>Password:</strong> marcus</p>

            </Form>
        </div>
    )
}