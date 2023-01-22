import { SimpleGrid,Box } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'







export  const LandingPage2=()=>{








return <div style={{marginTop:"20px"}}>


   <div style={{width:"95%",margin:"auto"
} }>
    <Card >
    <div style={{textAlign:"left",borderTop:"3px solid blue",marginBottom:"-20px",paddingTop:"-40px"}}>
        <h1>Electronics & Electrical Goods & Supplies</h1>
    </div>
   <Flex >
     <SimpleGrid border="0px solid yellow"   columns={[1]} width="400px" marginRight='20px'>
     <Box boxSize='sm'  backgroundImage="url('https://wallpaperaccess.com/full/2882373.jpg')">
     <div style={{
marginTop:"350px",
color:"white",
width:"250px",
fontSize:"17px",
textAlign:"left",
lineHeight:"30px",
marginLeft:"30px",
}}>
     <p>Voltage & Power Stabilizers
GPS and Navigation Devices
Biometrics & Access Control Devices
CCTV, Surveillance Systems and Parts</p>
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
      <Card marginTop="28px" marginLeft="15px"><img height="110px" src="https://4.imimg.com/data4/HI/RA/GLADMIN-181283/photocopier-machine-125x125.jpg" alt="" /></Card>
      <div style={{marginTop:"-15px",marginLeft:"15px"}}>
      <h5 style={{ textAlign:"left"}}>Office Automation Products</h5>
        <div style={{marginTop:"-10px",lineHeight:"20px", textAlign:"left",border:"0px solid red",fontSize:"14px"}}>
        <p style={{lineHeight:"13px"}} >Multifunction printers</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Xerox Machines</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Fingerprint scaners </p>
        </div>
      </div>
     </Box>
     <Box display="flex" height='160px' boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <Card marginTop="28px" marginLeft="15px"><img height="110px" width="100px" src="https://5.imimg.com/data5/GLADMIN/Default/2022/3/MZ/VG/IH/87924/arduino-sensor-125x125.jpg" alt="" /></Card>
      <div style={{marginTop:"-15px",marginLeft:"15px"}}>
      <h5 style={{ textAlign:"left"}}>Sensores & Trasducers</h5>
        <div style={{marginTop:"-10px",lineHeight:"20px", textAlign:"left",border:"0px solid red",fontSize:"14px"}}>
        <p style={{lineHeight:"15px"}}>Level Sensors</p>
        <p style={{marginTop:"0px"}}>Proximity sensors</p>
        <p style={{marginTop:"0px"}}>Load cell </p>
        </div>
      </div>
     </Box>
     <Box display="flex" height='160px' boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <Card marginTop="28px" marginLeft="15px"><img height="110px" src="https://5.imimg.com/data5/JW/EX/GLADMIN-2/digital-controller-125x125.jpg" alt="" /></Card>
      <div style={{marginTop:"-15px",marginLeft:"15px"}}>
      <h5 style={{ textAlign:"left"}}>Proceess Controllers</h5>
        <div style={{marginTop:"-10px",lineHeight:"20px", textAlign:"left",border:"0px solid red",fontSize:"14px"}}>
        <p style={{lineHeight:"13px"}} >Level controllers</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Motor Controllers</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Temprature Controllers </p>
        </div>
      </div>
     </Box>
     <Box display="flex" height='160px' boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <Card marginTop="28px" marginLeft="15px"><img height="110px" src="https://5.imimg.com/data5/RO/JS/GLADMIN-2/lighting-controllers1-125x125.jpg" alt="" /></Card>
      <div style={{marginTop:"-15px",marginLeft:"15px"}}>
      <h5 style={{ textAlign:"left"}}>Control and Automation</h5>
        <div style={{marginTop:"-10px",lineHeight:"20px", textAlign:"left",border:"0px solid red",fontSize:"14px"}}>
        <p style={{lineHeight:"13px"}} >VFD</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>PLC</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>HMI </p>
        </div>
      </div>
     </Box>
     <Box display="flex" height='160px' boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <Card marginTop="28px" marginLeft="15px"><img height="110px" src="https://3.imimg.com/data3/EX/HO/GLADMIN-37340/solar-power-systems-125x125.jpg" alt="" /></Card>
      <div style={{marginTop:"-15px",marginLeft:"15px"}}>
      <h5 style={{ textAlign:"left"}}>Solar & Renewable Energy</h5>
        <div style={{marginTop:"-10px",lineHeight:"20px", textAlign:"left",border:"0px solid red",fontSize:"14px"}}>
        <p style={{lineHeight:"13px"}} >Solar Panels</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Solar Invertors</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Solar Pipes </p>
        </div>
      </div>
     </Box>
     <Box display="flex" height='160px' boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <Card marginTop="28px" marginLeft="15px"><img height="110px" src="https://3.imimg.com/data3/XB/KH/GLADMIN-105874/light-emitting-diode-125x125.jpg" alt="" /></Card>
      <div style={{marginTop:"-15px",marginLeft:"15px"}}>
      <h5 style={{ textAlign:"left"}}>Diodes & ACtive Devices</h5>
        <div style={{marginTop:"-10px",lineHeight:"20px", textAlign:"left",border:"0px solid red",fontSize:"14px"}}>
        <p style={{lineHeight:"13px"}} >Intigrated Circuites</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Thytistors</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>LED</p>
        </div>
      </div>
     </Box>
     <Box display="flex" height='160px' boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <Card marginTop="28px" marginLeft="15px"><img height="110px" src="https://5.imimg.com/data5/GLADMIN/Default/2022/6/SI/KH/VT/87924/house-wire-125x125.jpg" alt="" /></Card>
      <div style={{marginTop:"-15px",marginLeft:"15px"}}>
      <h5 style={{ textAlign:"left"}}>Wires and Cables</h5>
        <div style={{marginTop:"-10px",lineHeight:"20px", textAlign:"left",border:"0px solid red",fontSize:"14px"}}>
        <p style={{lineHeight:"13px"}} >House Cables</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Amoured Wires</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Power Cables </p>
        </div>
      </div>
     </Box>
     <Box display="flex" height='160px' boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <Card marginTop="28px" marginLeft="15px"><img height="110px" src="https://5.imimg.com/data5/VB/IL/GLADMIN-2/street-light-125x125.jpg" alt="" /></Card>
      <div style={{marginTop:"-15px",marginLeft:"15px"}}>
      <h5 style={{ textAlign:"left"}}>Commercial Lights</h5>
        <div style={{marginTop:"-10px",lineHeight:"20px", textAlign:"left",border:"0px solid red",fontSize:"14px"}}>
        <p style={{lineHeight:"13px"}} >Flood Lights</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Street Lights</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Panel Lights </p>
        </div>
      </div>
     </Box>
     <Box display="flex" height='160px' boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <Card marginTop="28px" marginLeft="15px"><img height="110px" src="https://5.imimg.com/data5/LX/YW/GLADMIN-2/inverter-batteries-125x125.png" alt="" /></Card>
      <div style={{marginTop:"-15px",marginLeft:"15px"}}>
      <h5 style={{ textAlign:"left"}}>Batteries</h5>
        <div style={{marginTop:"-10px",lineHeight:"20px", textAlign:"left",border:"0px solid red",fontSize:"14px"}}>
        <p style={{lineHeight:"13px"}} >Lithium Batteries</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Invorter Batteries</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Electric Vehical Batteries </p>
        </div>
      </div>
     </Box>
  
</SimpleGrid></Flex>

</Card>
</div>
    </div>
};
