import React, { useEffect, useState } from "react";
import { getTodos } from "./api";
import Card from "./Card";
import { Product } from "./constant";
const Laptop=()=>{
    const [laptop,setLaptop] = useState<Product []>([])
    const [visible,setVisible] = useState(15)

    const showMore=()=>{
        setVisible((prev)=> prev+15)
    }

    useEffect(()=>{
        getTodos().then((res)=>{
           
            setLaptop(res)
            console.log(res);
            
        })
    },[])

    return <div>
    <h1>laptop</h1>
 
    <div style={{display:'grid', gridTemplateColumns: '1fr 1fr 1fr'}} >{laptop?.slice(0,visible).map((el)=>{
    return <Card key={el.id} {...el}  />
})}</div>
<button onClick={showMore} >Show More</button>

    </div>
       
    
}
export default Laptop