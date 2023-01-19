import React from "react";
import { Product } from "./constant";

const Card=({id,image,title,name,brand,price,ram,hard_drive_size,pns_h}:Product)=>{
    return <div>
    <img src={image} alt={title} />
    <p>{title}</p>
    <p>{name}</p>
    <p>{brand}</p>
    <p>{price}</p>
    <p>{ram}</p>
    <p>{hard_drive_size}</p>
    <p>Call {pns_h}</p>
    <button>Contact Supplier</button>
    </div>
       
    
}
export default Card