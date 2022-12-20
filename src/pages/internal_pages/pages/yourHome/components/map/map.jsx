import {useRef,useEffect} from 'react'
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import 'bootstrap/dist/css/bootstrap.min.css';

import esriConfig from '@arcgis/core/config'
import Locate from '@arcgis/core/widgets/Locate'
import Search from '@arcgis/core/widgets/Search'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer'
import Graphic from '@arcgis/core/Graphic'
import FeatureLayer from '@arcgis/core/layers/FeatureLayer'
import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard'
import * as Locator from '@arcgis/core/rest/locator'
import Point from '@arcgis/core/geometry/Point'
import { useState } from 'react';
import { once } from '@arcgis/core/core/reactiveUtils';
import { resolvePath } from 'react-router-dom';

const simpleMarkerSymbol = {
    type: "simple-marker",
    color: [226, 119, 40],  // Orange
    outline: {
        color: [255, 255, 255], // White
        width: 1
    }
 };
 const pointTemplate = { //Create a point
    type: "point",
    longitude: null,
    latitude: null
 };

const MyMap=(variables)=>{

    const mapRef = useRef(null);
    esriConfig.apiKey = "AAPK768fe6b6477e4c81920d51bae919e383LUfFQpe4GPvEL-NUgn1mQbgZvZHPZvBJIr_s-QYaShYERbooVbNGaWTOiCt0jXta"  // I need a key

    console.log("MAP; CHECKING COORDINATES: ",variables.coordinates)
    // const search = new Search();

    const createPoints = (coordinates) => {
        
        const points = []
        if(coordinates.length !== 0){
            coordinates.forEach(coordinate => {
                const point = {...pointTemplate};
                point.latitude = coordinate.latitude;
                point.longitude = coordinate.longitude;
                points.push(
                    new Graphic({
                        // GRAPHIC CHARACTERISTICS
                        geometry: point,
                        symbol: simpleMarkerSymbol,
                    })
                )
            });
        }
        return points;
    }

    useEffect(()=>{
    
        const map = new Map({
            basemap: "arcgis-navigation"
        })
    
        const view = new MapView({
            container: mapRef.current,          
            map: map,
            center: [103.851959,1.290270],
            zoom: 12,
        })
        // BASE MAP
        
        variables.getCoordinates()
        .then(coordinates=>{
            const points = createPoints(coordinates)
            console.log("MAP; CHECKING POINT GRAPHIC: ",points)
            points.forEach(point=>{
                view.graphics.add(point)
            })
        })
        .catch(err=>{
            console.log(err)
        })

        
        
        
        // view.on('click','popup',(e)=>{
        //     console.log(e)
        // })

        

    },[])

    return (
        
            <div ref={mapRef} style={{width: '100%', height: '100%'}}/>
        
    )
    
}

export default MyMap;