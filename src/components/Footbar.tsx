import { SimpleGrid,Box } from '@chakra-ui/react'

export const Footbar=()=>{


return <div>


<div style={{marginTop:"10px"}}>
    <div style={{display:"flex",width:"100%",height:"40px",border:"0 solid black",justifyContent:"space-around",background:"rgb(243,243,243)"}}>
       
        <h3 style={{marginTop:"5px"}}>We are here to help you!</h3>
        <div style={{display:"flex",marginTop:"0px",fontWeight:"25px"}}>
            <p style={{marginTop:"8px",fontWeight:"25px"}}>Go Mobile: </p>
            <img width={"60x"} height={"35px"} src="https://learnsafe.com/wp-content/uploads/2018/07/shutterstock_566817211.jpg" alt="" />
            <p style={{marginTop:"8px",fontWeight:"25px",marginLeft:"30px"}}>Follow us on: </p>
            <img width={"80x"} height={"35px"}  src="https://i.pinimg.com/originals/00/60/40/0060402b31aceeb2cff416180abecb81.png" alt="" />
        </div>
    </div>
<div style={{width:"80%",margin:"auto",marginLeft:"200px"}}>
<SimpleGrid columns={[2, null, 5]} spacing='40px'>
  <Box border={"0 solid red"} height='150px'>
    <div style={{lineHeight:"5px",textAlign:"left",color:"teal"}}>
    <p>About us</p>
    <p>Join sales</p>
    <p>success stories</p>
    <p>press section</p>
    <p>Advertise with us</p>
    <p>investor section</p>
    </div>
  </Box>
  <Box border={"0 solid red"} height='150px'>
    <div style={{lineHeight:"5px",textAlign:"left",color:"teal"}}>
    <p>Help</p>
    <p>feedback</p>
    <p>complaints </p>
    <p>customer care</p>
    <p>Job & Carrieres</p>
    <p>Contact Us</p>
    </div>
  </Box>
  <Box border={"0 solid red"} height='150px'>
    <div style={{lineHeight:"5px",textAlign:"left",color:"teal"}}>
    <h3>Suppliers ToolKit</h3>
    <p>sell on Bharath Mart</p>
    <p>Latest Lead</p>
    <p>Learning Model</p>
    <p>ship with Bharat Mart</p>
    
    </div>
  </Box>
  <Box border={"0 solid red"} height='150px'>
    <div style={{lineHeight:"5px",textAlign:"left",color:"teal"}}>
    <h3>Buyers ToolKit</h3>
    <p>sell on Bharath Mart</p>
    <p>Latest Lead</p>
    <p>Learning Model</p>
    <p>ship with Bharat Mart</p>
    </div>
  </Box>
  <Box border={"0 solid red"} height='150px'>
    <div style={{lineHeight:"5px",textAlign:"left",color:"teal"}}>
    <h3 style={{lineHeight:"15px",marginTop:"9px"}}>Accounting solutions</h3>
    <p>Acounting software</p>
    <p>Tally on Mobile</p>
    <p>GST</p>
    
    </div>
  </Box>
</SimpleGrid>
</div>
</div>
</div>
}