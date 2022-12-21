import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tag from "./components/tag";
import Price from "./components/price";
import Maintainence from "./components/maintainence";

export default function PropertyInformation(prop){

    const [data,setData] = useState({
        description: "Something about this place makes it seem luxurious..."
    })
    const [tags,setTags] = useState()

    const getPropertyInformation = () => {
        const coordinate = prop.coordinate;
    }
    
    const createTags = () => {
        const tags = []
        const test = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,6,2,4,5,2,2,5,3,3];
        test.forEach(item=>{
            tags.push(<Tag content={item}/>)
        })
        setTags(tags);
    }

    const getDescription = () => {

    }

    useEffect(()=>{
        createTags()
    },[])

    return(
        <div className="d-flex flex-column border border-danger w-100 h-100" style={{overflow: 'scroll'}}>
            <div className="d-flex flex-column">
                <h1 className="border border-danger">About the property</h1>
                <div id="tags" className="d-flex flex-wrap">{tags}</div>
                <div id="Description">{data.description}</div>
            </div>
            <div style={{marginTop: "5%"}}>
                <h1>Financial information</h1>
                <div>
                    <div className="border border-danger d-flex flex-column">
                        <h3 className="text-start m-2">Price</h3>   
                        <Price/>
                    </div>
                    <div className="border border-danger d-flex flex-column">
                        <h3 className="text-start m-2">Maintainence</h3>   
                        <Maintainence/>
                    </div>
                </div>
            </div>
        </div>
    )
}