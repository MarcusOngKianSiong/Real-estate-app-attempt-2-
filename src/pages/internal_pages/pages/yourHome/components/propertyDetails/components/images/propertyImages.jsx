import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from './components/image/image';
import {gettingPropertyImages} from '../../../../../../../../src/links.js'

export default function PropertyImages(prop){

    const [images,setImages] = useState(null)
    
    const getImageAddress = () => {
        console.log("Getting image address...")
        const coordinate = prop.coordinate
        fetch(`${gettingPropertyImages}?latitude=${coordinate.latitude}&longitude=${coordinate.longitude}&token=${sessionStorage.getItem('token')}`)
        .then(res=>{
            return res.json()
        })
        .then(res=>{
            console.log(res)
            const image = res.propertyImage[0].property_image;
            console.log("This: ",typeof image)
            const imageObject = JSON.parse(image);
            console.log("Image Object: ",imageObject)
            const imageList = []
            if(imageObject.length !== 0){
                for(const key in imageObject){
                    console.log(imageObject[key])
                    imageList.push(<Image filePath={imageObject[key].filePath} />); 
                    setImages(imageList)
                }
            }else{
                setImages("No images found...")
            }
        })
        .catch(err=>{
            console.log(err.message)
            setImages("No images found...")
        })
        
    }

    useEffect(()=>{
        getImageAddress()
    },[])

    return(
        <div className="d-flex flex-column border border-danger w-100 h-100" style={{overflow: 'scroll'}}>
            {images}

        </div>
    )
}