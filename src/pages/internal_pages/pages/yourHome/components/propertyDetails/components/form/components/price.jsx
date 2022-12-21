import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

export default function Price(prop){
    return(
        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Principal</Form.Label>
                <Form.Control type="principal" value="$1,000,000" />
            </Form.Group>
        
            <Form.Group className="mb-3" >
                <Form.Label>Downpayment</Form.Label>
                <Form.Control type="downpayment" value="$500,000" />
            </Form.Group>
            
            <Form.Group className="mb-3" >
                <Form.Label>Installment</Form.Label>
                
                <Form.Control type="Years" value="15 years" />
                <Form.Control type="interest" value="10%" />
            </Form.Group>

        </Form>
    )
}