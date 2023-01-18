import React, { useEffect, useState } from "react";
import { getTodos } from "./api";
import Card from "./Card";
import { Product } from "./constant";
const Laptop=()=>{
    const [laptop,setLaptop] = useState<Product []>([])

    useEffect(()=>{
        getTodos().then((res)=>{
           
            setLaptop(res)
            console.log(res);
            
        })
    },[])

    return <div>
    <h1>laptop</h1>
 
    {laptop?.map((el)=>{
    return <Card key={el.id} {...el}  />
})}

    </div>
       
    
}
export default Laptop