import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

export default function Price(prop){

    

    return(
        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Principal</Form.Label>
                <Form.Control type="principal" value={`$${prop.principal}`} />
            </Form.Group>
        
            <Form.Group className="mb-3" >
                <Form.Label>Downpayment</Form.Label>
                <Form.Control type="downpayment" value={`$${prop.downpayment/100*prop.principal}`} />
            </Form.Group>
            
            <Form.Group className="mb-3" >
                <Form.Label>Installment</Form.Label>
                
                <Form.Control type="Years" value={`${prop.installmentYears} years`} />
                <Form.Control type="interest" value={`${prop.installmentInterestRate}%`} />
            </Form.Group>

        </Form>
    )
}