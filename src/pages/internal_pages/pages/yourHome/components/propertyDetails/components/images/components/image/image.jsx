import React from "react";
import {IKImage} from 'imagekitio-react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Image(prop){

    return(
        <IKImage urlEndpoint={"https://ik.imagekit.io/uhtx1amtt/"} path={prop.filePath} className="m-2" style={{borderRadius: "10px"}}/>
    )

}