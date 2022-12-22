import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tag from "./components/tag";
import Price from "./components/price";
import Maintainence from "./components/maintainence";

export default function PropertyInformation(prop){

    const [data,setData] = useState({
        description: ""
    })
    const [tags,setTags] = useState()

    const createTags = () => {
        if(data.tags){
            const tags = data.tags.split(",");
            console.log("THIS: ",tags)
            
            const tagElements = []
            tags.forEach(item=>{
                tagElements.push(<Tag content={item}/>)
            })
            setTags(tagElements);
        }
        
    }

    const getData = () => {
        const coordinate = prop.coordinate;
        fetch(`https://470wu2qcw1.execute-api.ap-southeast-1.amazonaws.com/RealEstateApp/yourhomes/get-property-information?latitude=${coordinate.latitude}&longitude=${coordinate.longitude}&token=${sessionStorage.getItem('token')}`)
        .then(res=>{
            return res.json()
        })
        .then(res=>{
            if(res.outcome){
                console.log(res.data[0])
                setData(res.data[0])
                
            }else{
                console.log(res.reason)
            }

        })
    }

    

    useEffect(()=>{
        console.log("CHECKING PROPERTY INFOMRATION COORDINATE: ",prop.coordinate)
        getData()
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
                        <Price principal={data.principal} downpayment={data.downpayment_percentage} installmentYears={data.installment_duration} installmentInterestRate={data.installment_interest_rate}/>
                    </div>
                    <div className="border border-danger d-flex flex-column">
                        <h3 className="text-start m-2">Maintainence</h3>   
                        <Maintainence mortgageInsurance={data.mortgage_insurance} principal={data.principal} propertyTaxRate={data.property_tax_rate} homeInsurance={data.home_insurance} hoa={data.hoa}/>
                    </div>
                </div>
            </div>
        </div>
    )
}