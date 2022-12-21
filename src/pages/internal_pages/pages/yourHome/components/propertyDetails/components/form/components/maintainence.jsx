import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

export default function Maintainence(prop){

    return(
        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Mortgage Insurance</Form.Label>
                <Form.Control type="mortgageInsurance" value="$1000 per month" />
            </Form.Group>
        
            <Form.Group className="mb-3" >
                <Form.Label>Property Taxes</Form.Label>
                <Form.Control type="Principal" value="$1,000,000" />
                <Form.Control type="propertyTaxRate" value="10%" />
            </Form.Group>
            
            <Form.Group className="mb-3" >
                <Form.Label>Home insurance</Form.Label>
                <Form.Control type="homeInsurance" value="$2000 per month" />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>HOA Fees</Form.Label>
                <Form.Control type="HOA" value="$200 per month" />
            </Form.Group>

        </Form>
    )

}