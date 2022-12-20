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

export default function YourHomes(){
    
    const [properties,setProperties] = useState([]);
    const [coordinates,setCoordinates] = useState([]);
    const [pointers,setPointers] = useState([]);
    const [map,setMap] = useState(null);

    const createMap = () => {
        setMap(<Map coordinates={coordinates} pointers={pointers}/>)
    }

    const createPoints = () => {
        
        const allPoints = [];
        // TEMPLATES
        const simpleMarkerSymbol = {
            type: "simple-marker",
            color: [226, 119, 40],  // Orange
            outline: {
                color: [255, 255, 255], // White
                width: 1
            }
         };
        const attributes = {
            latitude: null,
            longitude: null,
            address: null
        }
        const popupTemplate = {
            // ATTACHES POPUP TO GRAPHIC
            title: "Latitude: {latitude}, Longitude: {longitude}",
            content: "{address}"
        }
        
        coordinates.forEach(pointer=>{
            const point = { //Create a point
                id: 'popup',
                type: "point",
                longitude: pointer.longitude,
                latitude: pointer.latitude
             };
             attributes.latitude = pointer.latitude;
             attributes.longitude = pointer.longitude;
             
             const pointGraphic = new Graphic({
                // GRAPHIC CHARACTERISTICS
                geometry: point,
                symbol: simpleMarkerSymbol,
                
                // ATTACHES POPUP TO GRAPHIC
                attributes: attributes,
                popupTemplate: popupTemplate
             });
             allPoints.push(pointGraphic)
        })
        
        setPointers(allPoints)
    }

    const createCards = (coordinates) => {
        const cards = []
        coordinates.forEach(coordinate=>{
            cards.push(<Card location={coordinate} />)
        })
        setProperties(cards)
    }

    const getCoordinates = () => {
        const token = sessionStorage.getItem('token')
    
        fetch(gettingCoordinates+`?token=${token}`)
        .then(res=>{
            return res.json()
        })
        .then(res=>{
            
            if(res.outcome && res.coordinates.length !== 0){
                setCoordinates(res.coordinates);
                createCards(res.coordinates);
            }
        })
        .catch(error=>{
            console.log(error);
        })
    }
    
    const getPersonalPropertyData = () => {
        // fetch property data
        
    }

    useEffect(()=>{
        getCoordinates()
    },[])

    useEffect(()=>{
        
        createPoints()
        console.log("Checking pointer creation: ",pointers)
        
    },[coordinates])

    useEffect(()=>{
        createMap()
    },[pointers])

    return(
        <div>
            <InternalNavBar/>
            <div className="d-flex " style={{width: '100vw',height: '100vh'}}>
                {map}
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