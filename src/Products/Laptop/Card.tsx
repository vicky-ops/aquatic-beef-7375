import React from "react";
import { Product } from "./constant";

const Card=({id,image,title,name,brand,price,ram,hard_drive_size}:Product)=>{
    return <>
    <img src={image} alt={title} />
    <p>{title}</p>
    <p>{name}</p>
    <p>{brand}</p>
    <p>{price}</p>
    <p>{ram}</p>
    <p>{hard_drive_size}</p>
    </>
       
    
}
export default Card