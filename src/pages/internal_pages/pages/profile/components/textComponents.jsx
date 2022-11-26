import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Components(tools){
    return(
                    <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                        <Form.Label>{tools.fieldName}</Form.Label>
                        <Form.Control type="input" placeholder="Nothing here" value={tools.value}/>
                        <Button onClick={()=>{tools.editData(tools.fieldName,tools.value)}}>Edit</Button>
                    </Form.Group>
    )
}