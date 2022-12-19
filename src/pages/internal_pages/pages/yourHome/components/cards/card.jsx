import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import * as Locator from '@arcgis/core/rest/locator'
import { useEffect,useState } from "react";
import Point from '@arcgis/core/geometry/Point'

export default function Cards(prop){

    const [address,setAddress] = useState(null)

    const getAddress = () => {
        const coordinate = prop.location;
        const serviceUrl = "http://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer";
        const pointer = new Point(coordinate.longitude,coordinate.latitude);
        const params = {
            location: pointer
        }
        Locator.locationToAddress(serviceUrl,params)
        .then(res=>{
            setAddress(res.address)    
        })
        .catch(err=>{
            setAddress(err.message)
        })
    }

    useEffect(()=>{
        
        getAddress()
    },[])

    return(
        <div className="m-3">
            
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Address: {address}
                    </Card.Text>
                </Card.Body>
            </Card>
            
        </div>
        
    )
}
