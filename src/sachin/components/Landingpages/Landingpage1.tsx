import { SimpleGrid,Box } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'







export  const LandingPage1=()=>{








return <div>


   <div style={{width:"95%",margin:"auto"
} }>
    <Card >
    <div style={{textAlign:"left",borderTop:"3px solid rgb(46,49,146)",marginBottom:"-20px",paddingTop:"-40px"}}>
        <h1>Building Construction Material & Equipment</h1>
    </div>
   <Flex >
     <SimpleGrid border="0px solid yellow"   columns={[1]} width="400px" marginRight='20px'>
     <Box boxSize='sm'  backgroundImage="url('https://media.istockphoto.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?b=1&s=170667a&w=0&k=20&c=Mq9Qm3UjzrqNKs6HFOFNJps-P9z4ijK1aTx1nP4gEes=')">
     <div style={{
marginTop:"350px",
color:"white",
width:"250px",
fontSize:"17px",
textAlign:"left",
lineHeight:"30px",
marginLeft:"30px",
}}>
     <p>Prefabricated Houses
Scaffolding Planks & Plates
Construction Machines
Crushing Machines & Plants</p>
<button
style={{
    width:"120px",
    height:"40px",
    borderRadius:"5px",
    border:"none",
    marginLeft:"60px",
    backgroundColor:"rgb(25,165,152)"
}}
>View All</button>
</div>
</Box>


     
  
    </SimpleGrid>
    <Spacer />
     <SimpleGrid  border="0px solid black" width="75%" columns={[1,2,3]} spacing='40px'>
    
     <Box  display="flex" height='160px' boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <Card marginTop="28px" marginLeft="15px"><img height="110px" src="https://3.imimg.com/data3/RS/UH/GLADMIN-5385/brick-making-machines-125x125.jpg" alt="" /></Card>
      <div style={{marginTop:"-15px",marginLeft:"15px"}}>
      <h5 style={{ textAlign:"left"}}>Brick Making Machines</h5>
        <div style={{marginTop:"-10px",lineHeight:"20px", textAlign:"left",border:"0px solid red",fontSize:"14px"}}>
        <p style={{lineHeight:"13px"}} >Fly Ash Brick Making Machine</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Clay Brick Making Machines</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Cement Brick Making Machines </p>
        </div>
      </div>
     </Box>
     <Box display="flex" height='160px' boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <Card marginTop="28px" marginLeft="15px"><img height="110px" src="https://3.imimg.com/data3/OI/XL/GLADMIN-34562/passenger-lifts-125x125.jpg" alt="" /></Card>
      <div style={{marginTop:"-15px",marginLeft:"15px"}}>
      <h5 style={{ textAlign:"left"}}>Passenger Lifts</h5>
        <div style={{marginTop:"-10px",lineHeight:"20px", textAlign:"left",border:"0px solid red",fontSize:"14px"}}>
        <p style={{lineHeight:"15px"}}>Residential Elevator</p>
        <p style={{marginTop:"0px"}}>Kone Passenger lift</p>
        <p style={{marginTop:"0px"}}>Stair Lift </p>
        </div>
      </div>
     </Box>
     <Box display="flex" height='160px' boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <Card marginTop="28px" marginLeft="15px"><img height="110px" src="https://3.imimg.com/data3/KS/JQ/GLADMIN-2475/tmt-bars-125x125.jpg" alt="" /></Card>
      <div style={{marginTop:"-15px",marginLeft:"15px"}}>
      <h5 style={{ textAlign:"left"}}>TMT Bars</h5>
        <div style={{marginTop:"-10px",lineHeight:"20px", textAlign:"left",border:"0px solid red",fontSize:"14px"}}>
        <p style={{lineHeight:"13px"}} >TMT Steel Bars</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>TATA TMT Bars</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Kamdhenu TMT Bars </p>
        </div>
      </div>
     </Box>
     <Box display="flex" height='160px' boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <Card marginTop="28px" marginLeft="15px"><img height="110px" src="https://5.imimg.com/data5/QO/YD/GLADMIN-2/plywoods-125x125.jpg" alt="" /></Card>
      <div style={{marginTop:"-15px",marginLeft:"15px"}}>
      <h5 style={{ textAlign:"left"}}>Plywoods</h5>
        <div style={{marginTop:"-10px",lineHeight:"20px", textAlign:"left",border:"0px solid red",fontSize:"14px"}}>
        <p style={{lineHeight:"13px"}} >Shuttering Plywoods</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Laminated Plywood</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Waterproof Plywoods </p>
        </div>
      </div>
     </Box>
     <Box display="flex" height='160px' boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <Card marginTop="28px" marginLeft="15px"><img height="110px" src="https://3.imimg.com/data3/JE/DA/MY-2/hydraulic-excavator-500x500-125x125.jpg" alt="" /></Card>
      <div style={{marginTop:"-15px",marginLeft:"15px"}}>
      <h5 style={{ textAlign:"left"}}>Excavator</h5>
        <div style={{marginTop:"-10px",lineHeight:"20px", textAlign:"left",border:"0px solid red",fontSize:"14px"}}>
        <p style={{lineHeight:"13px"}} >Hitach Excavator </p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Hyndai Excavator</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Kamstu Excavator </p>
        </div>
      </div>
     </Box>
     <Box display="flex" height='160px' boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <Card marginTop="28px" marginLeft="15px"><img height="110px" src="https://3.imimg.com/data3/VG/QG/GLADMIN-27799/emulsion-paints-125x125.jpg" alt="" /></Card>
      <div style={{marginTop:"-15px",marginLeft:"15px"}}>
      <h5 style={{ textAlign:"left"}}>Emulsion Paints</h5>
        <div style={{marginTop:"-10px",lineHeight:"20px", textAlign:"left",border:"0px solid red",fontSize:"14px"}}>
        <p style={{lineHeight:"13px"}} >Asian Paints</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Berger Paints</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Nerolac Paints </p>
        </div>
      </div>
     </Box>
     <Box display="flex" height='160px' boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <Card marginTop="28px" marginLeft="15px"><img height="110px" src="https://3.imimg.com/data3/UT/PB/GLADMIN-12558/wood-door-125x125.jpg" alt="" /></Card>
      <div style={{marginTop:"-15px",marginLeft:"15px"}}>
      <h5 style={{ textAlign:"left"}}>Wooden Door</h5>
        <div style={{marginTop:"-10px",lineHeight:"20px", textAlign:"left",border:"0px solid red",fontSize:"14px"}}>
        <p style={{lineHeight:"13px"}} >Design wooden Door</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Plywood Door</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Wooden flush Door </p>
        </div>
      </div>
     </Box>
     <Box display="flex" height='160px' boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <Card marginTop="28px" marginLeft="15px"><img height="110px" src="https://3.imimg.com/data3/VN/LA/GLADMIN-2047/pvc-pipes-125x125.jpg" alt="" /></Card>
      <div style={{marginTop:"-15px",marginLeft:"15px"}}>
      <h5 style={{ textAlign:"left"}}>PVC Pipes</h5>
        <div style={{marginTop:"-10px",lineHeight:"20px", textAlign:"left",border:"0px solid red",fontSize:"14px"}}>
        <p style={{lineHeight:"13px"}} >Finolex Pipes</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Rigid PVC Pipes</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Flexible Pipes </p>
        </div>
      </div>
     </Box>
     <Box display="flex" height='160px' boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <Card marginTop="28px" marginLeft="15px"><img height="110px" src="https://3.imimg.com/data3/YD/WE/GLADMIN-23639/building-brick-125x125.jpg" alt="" /></Card>
      <div style={{marginTop:"-15px",marginLeft:"15px"}}>
      <h5 style={{ textAlign:"left"}}>Building Bricks</h5>
        <div style={{marginTop:"-10px",lineHeight:"20px", textAlign:"left",border:"0px solid red",fontSize:"14px"}}>
        <p style={{lineHeight:"13px"}} >Red Bricks</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>White Bricks</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Cement Bricks </p>
        </div>
      </div>
     </Box>
  
</SimpleGrid></Flex>

</Card>
</div>
    </div>
};
