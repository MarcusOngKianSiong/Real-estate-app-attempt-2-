import React,{useState,useEffect} from "react";
import InternalNavBar from '../../../assets/internalNavBar'
import Card from './components/cards/card'
import Map from './components/map/map'
import SideBar from './components/sideBar/sideBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { getOverlayDirection } from "react-bootstrap/esm/helpers";
import { gettingCoordinates } from "../../../../src/links";


export default function YourHomes(){



    const [properties,setProperties] = useState([])
    const [coordinates,setCoordinates] = useState([])
    

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

    return(
        <div>
            <InternalNavBar/>
            <div className="d-flex " style={{width: '100vw',height: '100vh'}}>
                <Map coordinates={coordinates}/>
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