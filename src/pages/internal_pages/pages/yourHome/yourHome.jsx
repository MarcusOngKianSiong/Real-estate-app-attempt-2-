import React,{useState,useEffect} from "react";
import InternalNavBar from '../../../assets/internalNavBar'
import Card from './components/cards/card'
import Map from './components/map/map'
import SideBar from './components/sideBar/sideBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { getOverlayDirection } from "react-bootstrap/esm/helpers";
import { gettingCoordinates } from "../../../../src/links";
import Point from '@arcgis/core/geometry/Point'
import Graphic from '@arcgis/core/Graphic'
import { once } from "@arcgis/core/core/reactiveUtils";
import PropertyDetail from "./components/propertyDetails/propertyDetails";

export default function YourHomes(){

    const getCoordinates = async () => {
        const token = sessionStorage.getItem('token')
        const outcome = await fetch(gettingCoordinates+`?token=${token}`)
        .then(res=>{
            return res.json()
        })
        .then(res=>{
            if(res.outcome && res.coordinates.length !== 0){
                return res.coordinates
                // setCoordinates(res.coordinates);
                // createCards(res.coordinates);
            }
        })
        .catch(error=>{
            console.log(error);
        })
        return outcome;
    }

    const [coordinates,setCoordinates] = useState([]);
    const [properties,setProperties] = useState([]);
    const [propertyDetails,setPropertyDetails] = useState(null)

    const closePropertyDetail = () => {
        console.log("CLOSING DETAILS....")
        setPropertyDetails(null)
    }

    const openPropertyDetails = (address,coordinate) => {
        console.log("OPENING DETAILS....")
        setPropertyDetails(<PropertyDetail close={closePropertyDetail} address={address} coordinate={coordinate}/>)
    }

    const createCards = (coordinates) => {
        const cards = []
        coordinates.forEach(coordinate=>{
            cards.push(<Card location={coordinate} openPropertyDetails={openPropertyDetails}/>)
        })
        setProperties(cards)
    }
    
    const getPersonalPropertyData = () => {
        // fetch property data
        
    }

    

    useEffect(()=>{
        getCoordinates()
        .then(coordinates=>{
            setCoordinates(coordinates)
            createCards(coordinates)
        })
    },[])

    return(
        <div>
            <InternalNavBar/>
            {propertyDetails}
            <div className="d-flex " style={{width: '100vw',height: '100vh'}}>
                <Map getCoordinates={getCoordinates}/>
                <div id="cards" >
                    <Button className="m-3">Add Home</Button>
                    <div>
                        {properties}
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}