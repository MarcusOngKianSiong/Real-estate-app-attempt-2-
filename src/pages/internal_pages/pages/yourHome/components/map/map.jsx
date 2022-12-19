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

const MyMap=(variables)=>{
    
    const mapRef = useRef(null);
    esriConfig.apiKey = "AAPK768fe6b6477e4c81920d51bae919e383LUfFQpe4GPvEL-NUgn1mQbgZvZHPZvBJIr_s-QYaShYERbooVbNGaWTOiCt0jXta"  // I need a key
    
    const [address,setAddress] = useState(null)

    const search = new Search();
    
    const getCoordinates = () => {
        console.log("GETTING COORDINATES!!!!")
        search.on('search-complete',(result)=>{
          const geom = result.results[0].results[0].feature.geometry;
          const longitude = geom.longitude;
          const latitude = geom.latitude;
          const address = result.searchTerm;
          variables.setAddressData(address,latitude,longitude)
          variables.changeLocationDataDisplay({
            address: address,
            lantitude: latitude,
            longitude: longitude
          })
        })
    }
    
    const handleClick = (event) => {
        const element = event.target.className;
        console.log(event)
        if(element === "esri-icon-search" || element === "esri-menu__list-item"){
          getCoordinates()
        }
    }
    
    const handleKeyDown = (event) => {
        if(event.code === "Enter"){
            getCoordinates()
        }
    }
    




    const createPoints = () => {
        console.log(variables.coordinates)
        const allPoints = []
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
            title: "Latitude: {latitude}, Longitude: {longitude}",
            content: "{address}"
        }
        
        variables.coordinates.forEach(pointer=>{
            const point = { //Create a point
                id: 'popup',
                type: "point",
                longitude: pointer.longitude,
                latitude: pointer.latitude
             };
             attributes.latitude = point.latitude;
             attributes.longitude = point.longitude;
             
             const pointGraphic = new Graphic({
                geometry: point,
                symbol: simpleMarkerSymbol,
                
                attributes: attributes,
                popupTemplate: popupTemplate
             });
             allPoints.push(pointGraphic)
        })
        return allPoints
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
    
        // How do you even attach the search onto the map by default?
        search.view = view;

        view.ui.add(search,{
            position: "top-left",
            index: 2
        })
        
        const locate = new Locate({
            view: view,
            useHeadingEnabled: false,
            goToOverride: (view,options)=>{
                options.target.scale = 1500;
                return view.goTo(options.target);
            }
        })
        
        const pointList = createPoints() 
        pointList.forEach(pointing=>{
            view.graphics.add(pointing)
        })

        
         const template = {
            title: 'something',
            content: 'nothing'
         }

        // A grouping of specific elements on the map
        // const layer = new FeatureLayer({
            
        //     // -------WHAT ELEMENTS TO TARGET?------ 
        //     // This represents what type of element is being grouped into this layer
        //     source: view.graphics, 
        //     // This represents what specific element is being targeted within the type of element
        //     geometryType: 'point',
        //     // this is the structure of the things inside the popup. ** not fields, data collected cannot be displayed. 
        
        //     // --------WHAT DO YOU WANT THE SPECIFIC ELEMENTS INSIDE THIS LAYER TO SHOW?--------
        //     // This is to show the popup + collect the data to be displayed in the popup. 
        //     popupTemplate: template,

        //     // ---------WHAT IS THE STRUCTURE BEHIND WHAT YOU WANT TO SHOW?-------
        //     // Given it is a popup, this structure represents the content inside. 
        //     fields: [{
        //         name: "ObjectID",
        //         alias: "ObjectID",
        //         type: "oid"
        //       }, {
        //         name: "place",
        //         alias: "Place",
        //         type: "string"
        //       }],
            
        // })

        // map.add(layer)
        
        view.on('click','popup',(e)=>{
            console.log(e)
        })

        view.ui.add(locate, 'top-left');

    },[])
    
    return (
        
            <div ref={mapRef} onClick={(event)=>{handleClick(event)}} onKeyDown={(event)=>{handleKeyDown(event)}} style={{width: '100%', height: '100%'}}/>
        
    )
    
}

export default MyMap;