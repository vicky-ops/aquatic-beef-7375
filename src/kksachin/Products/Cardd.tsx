import React from "react";
import { Product } from "./constant";
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';

const Cardd=({id,image,title,name,brand,price,ram,hard_drive_size,pns_h}:Product)=>{
    return <div style={{border:"1px solid red",margin:"5px"}} >
    <img style={{border:"1px solid black"}} src={image} alt={title} />
    <p style={{color:"blue"}} >{title}</p>
    <p style={{color:"gray"}}>{name}</p>
    <p>{brand}</p>
    
    <p>&#x20b9;{price} </p>
    {/* <p>{ram}</p>
    <p>{hard_drive_size}</p> */}
    <p>Call {pns_h}</p>
    <button style={{background:"#047a70",borderRadius:"5px",border:"none",height:"30px",width:"140px",color:"white",fontWeight:"bold",cursor:"pointer"}} >Contact Supplier</button>
    </div>
       
    
}
export default Cardd