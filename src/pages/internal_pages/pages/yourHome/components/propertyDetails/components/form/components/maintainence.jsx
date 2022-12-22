import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';

export default function Maintainence(prop){

    return(
        <Form>
            <Form.Group className="mb-3" >
                <Form.Label>Mortgage Insurance</Form.Label>
                <Form.Control type="mortgageInsurance" value={`$${prop.mortgageInsurance} per month`} />
            </Form.Group>
        
            <Form.Group className="mb-3" >
                <Form.Label>Property Taxes</Form.Label>
                <Form.Control type="Property Tax" value={`$${prop.propertyTaxRate/100*prop.principal} per month`} />
                <Form.Control type="propertyTaxRate" value={`${prop.propertyTaxRate}%`} />
            </Form.Group>
            
            <Form.Group className="mb-3" >
                <Form.Label>Home insurance</Form.Label>
                <Form.Control type="homeInsurance" value={`$${prop.homeInsurance} per month`} />
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>HOA Fees</Form.Label>
                <Form.Control type="HOA" value={`$${prop.hoa} per month`} />
            </Form.Group>

        </Form>
    )

}