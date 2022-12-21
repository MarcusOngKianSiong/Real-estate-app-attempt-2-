import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';

export default function Tag(prop){
    return(
        <h5 className="m-1"><Badge bg="secondary">{prop.content}</Badge></h5>
    )
}
