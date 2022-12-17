import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

export default function Cards(prop){
    return(
        <div>
            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Location: {prop.location}
                    </Card.Text>
                </Card.Body>
            </Card>
            
        </div>
        
    )
}
