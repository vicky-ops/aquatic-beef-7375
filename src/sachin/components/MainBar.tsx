import { SimpleGrid,Box } from '@chakra-ui/react'
import {IoLocationSharp} from 'react-icons/io5'
import {BsSearch}  from 'react-icons/bs'
export const Mainbar=()=>{

    return <div>
<div>
<SimpleGrid border="0px solid yellow"   columns={[1]} width="100%" marginRight='20px'>
     <Box boxSize='sm'  backgroundImage="url('https://wallpapercave.com/wp/wp1907057.jpg')">
     <div style={{
marginTop:"200px",
color:"white",
width:"100%",
fontSize:"17px",
textAlign:"left",
lineHeight:"30px",
marginLeft:"30px",
}}>
    <div style={{}}>
<SimpleGrid columns={[2, null, 3]} marginBottom="100px" marginTop="-78px" >
  <Box border={"0px solid black"} marginLeft="250px" width="200px" height='53px'>
    <div style={{display:"flex",height:"52px",background:"rgb(236,236,236)",paddingLeft:"10px"}}>
    
    <IoLocationSharp style={{color:"green",paddingTop:"18px"}}/>
    <button style={{height:"52px",background:"rgb(236,236,236)",width:"200px",border:"none",fontSize:"18px",textAlign:"left"}}>ALL INDIA</button>
    </div>
    </Box>
  <Box border={"0px solid black"} height='50px'>
    <input style={{width:"445px",height:"50px",fontSize:"20px",border:"none"}} type="text" placeholder='Enter Product/Services Name' />
  </Box>

  
  <Box border={"0px solid black"} width="200px" height='50px'>
  <div style={{display:"flex",height:"52px",background:"rgb(4,132,122)",paddingLeft:"10px"}}>
<BsSearch style={{color:"white",paddingTop:"18px"}}  />
    <button style={{height:"52px",color:"white",background:"rgb(4,132,122)",border:"none",fontSize:"18px",textAlign:"left",width:"200px"}}>Search</button>
  </div>
  </Box>
  
</SimpleGrid>
    </div>
</div>
</Box>


     
  
    </SimpleGrid>
</div>


    </div>
}