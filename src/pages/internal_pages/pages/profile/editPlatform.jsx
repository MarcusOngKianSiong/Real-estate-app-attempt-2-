
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useEffect,useState } from 'react';


export default function EditPlatform(tools){

    
    const [newValue,setNewValue] = useState("")

    return(
        <div className="position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center" style={{'backdropFilter': 'blur(2px)'}}>
            <div className="border border-danger w-50 h-50">
                <p>Editing {tools.fieldName}</p>
                <p>Current Value: {tools.currentValue}</p>
                <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                        <Form.Control type="input" placeholder="Nothing here" value={tools.currentValue}/>
                        <Form.Control type="input" value={newValue} onChange={(e)=>{setNewValue(e.target.value)}}/>
                </Form.Group>
                <Button onClick={tools.back}>Cancel</Button>
                <Button onClick={()=>{tools.saveChange(tools.fieldName,newValue)}}>Save</Button>
            </div>
        </div>
    )
}