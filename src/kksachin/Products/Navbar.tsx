import { Image } from '@chakra-ui/react'
import React from "react";
import {useState} from 'react';
// import { Hoverpage } from './Hoverpage';
import{SimpleGrid,Box} from '@chakra-ui/react'
import { Link } from "react-router-dom"
import { TfiHelpAlt } from "react-icons/tfi";
import {CiShoppingTag} from 'react-icons/ci'
import {SiHomeassistantcommunitystore} from 'react-icons/si'
import {BiMessageDetail} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'
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
                {/* <h2><Hoverpage/></h2> */}
              
              </div>
            )}
          </div>
        </div>
      );
    };
    
   
    


    return <div>


        <div style={{width:"100%",display:"flex",justifyContent:"space-around",height:"70px",background:"rgb(46,49,146)",position:"fixed",zIndex:"1"}}>
            <div style={{height:"60px",background:"rgb(46,49,146)",display:"flex",color:"white",gap:"10px"}}>
                <Link to={"/"}>
                <img  style={{borderRadius:"25px",marginTop:"5px"}} width={"80px"} height={"60px"} src="https://i.ibb.co/Twjn3FT/logo-bharatmart2.png" alt="" /></Link>
                {/* <h1>Bharat Mart</h1> */}
               </div>
              
               <div  style={{marginLeft:"0px",border:"0px solid black"}}>
              

<SimpleGrid columns={[2, null, 5]}  marginLeft="720"spacing='10px'>
 
<Box border={"0px solid black"} height='70px'><CiShoppingTag style={{marginTop:"10px",width:"45px",height:"20px"}} color='white'/>
   <p style={{color:"white",marginTop:"0px",fontWeight:"15px",fontSize:"14px"}}>Shopping</p>
  
  </Box>
<Box border={"0px solid black"} height='70px'><CiShoppingTag style={{marginTop:"10px",width:"45px",height:"20px"}} color='white'/>
   <p style={{color:"white",marginTop:"0px",fontWeight:"15px",fontSize:"14px"}}>Products</p>
  
  </Box>
  <Box border={"0px solid black"} height='70px'><SiHomeassistantcommunitystore style={{marginTop:"10px",width:"35px",height:"20px"}} color='white'/>
   <p style={{color:"white",marginTop:"0px",fontWeight:"15px",fontSize:"14px"}}>Sell</p>
  
  </Box>
  <Box border={"0px solid black"} height='70px'><TfiHelpAlt style={{marginTop:"10px",width:"35px",height:"20px"}} color='white'/>
   <p style={{color:"white",marginTop:"0px",fontWeight:"15px",fontSize:"14px"}}>help</p>
  
  </Box>
  <Box border={"0px solid black"} height='70px'><BiMessageDetail style={{marginTop:"10px",width:"35px",height:"20px"}} color='white'/>
   <p style={{color:"white",marginTop:"0px",fontWeight:"15px",fontSize:"14px"}}>Messages</p>
  
  </Box>
  <Box border={"0px solid black"} height='70px'><CgProfile style={{marginTop:"10px",width:"35px",height:"20px"}} color='white'/>
   <p style={{color:"white",marginTop:"0px",fontWeight:"15px",fontSize:"14px"}}>Sign In</p>
  
  </Box>
</SimpleGrid>
              


               </div>
        </div>
    </div>
}
