import { Image } from '@chakra-ui/react'
import React from "react";
import {useState} from 'react';
import { Hoverpage } from './Hoverpage';
import{SimpleGrid,Box} from '@chakra-ui/react'
export const Navbar=()=>{
   

    const App = () => {
      const [isHovering, setIsHovering] = useState(false);
    
      const handleMouseOver = () => {
        setIsHovering(true);
      };
    
      const handleMouseOut = () => {
        setIsHovering(false);
      };
    
      return (
        <div>
          <div>
            <div
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Hover over me
            </div>
    
            {isHovering && (
              <div style={{background:"white"}}>
                <h2><Hoverpage/></h2>
              
              </div>
            )}
          </div>
        </div>
      );
    };
    
   
    


    return <div>


        <div style={{display:"flex",justifyContent:"space-between",background:"blue"}}>
            <div style={{height:"70px",background:"blue",display:"flex",color:"white",gap:"10px"}}>
                <img  style={{borderRadius:"25px",marginTop:"5px"}} width={"80px"} height={"60px"} src="https://i.ibb.co/Twjn3FT/logo-bharatmart2.png" alt="" />
                <h1>Bharat Mart</h1>
               </div>
              
               <div >

               <App/>


               </div>
        </div>
    </div>
}
