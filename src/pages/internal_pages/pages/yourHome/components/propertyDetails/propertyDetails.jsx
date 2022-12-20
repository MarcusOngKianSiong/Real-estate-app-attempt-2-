import React from "react";
import Button from "react-bootstrap/esm/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropertyImages from './components/images/propertyImages'
import PropertyInformation from './components/form/propertyInformation'

export default function PropertyDetail (properties) {

    return (
        <div className="position-absolute border border-danger w-100 h-100" style={{zIndex: 1, backdropFilter: 'blur(2px)'}}>
            <Button onClick={properties.close} className="m-3">Close</Button>
            <h4>{properties.address}</h4>
            <div className="border border-danger m-3 d-flex " style={{height: '85vh', background: 'white'}}>
                <div className="border border-danger" style={{flex: "1"}}>
                    <PropertyImages coordinate={properties.coordinate}/>
                </div>
                <div className="border border-danger" style={{flex: "1"}}>
                    <PropertyInformation coordinate={properties.coordinate}/>
                </div>
                
                
            </div>
        </div>
    )
}