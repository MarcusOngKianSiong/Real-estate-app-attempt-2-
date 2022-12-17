import React,{useState,useEffect} from "react";
import InternalNavBar from '../../../assets/internalNavBar'
import Card from './components/cards/card'
import Map from './components/map/map'
import SideBar from './components/sideBar/sideBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { getOverlayDirection } from "react-bootstrap/esm/helpers";

export default function YourHomes(){

    const [properties,setProperties] = useState([<Card location={"Something"}/>])
    
    const getPersonalPropertyData = () => {
        // fetch property data
        
    }

    useEffect(()=>{
        
    },[])

    return(
        <div>
            <InternalNavBar/>
            <div>
                <Button >Add Home</Button>
                <div id="map">
                    <Map/>
                </div>
                <div id="cards">
                    {properties}
                </div>
            </div>
        </div>
        
    )
}