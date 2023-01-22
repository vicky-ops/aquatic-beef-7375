

import { SimpleGrid,Box } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'







export  const LandingPage8=()=>{








return <div style={{marginTop:"20px"}}>


   <div style={{width:"95%",margin:"auto"
} }>
    <Card >
    <div style={{textAlign:"left",borderTop:"3px solid rgb(46,49,146)",marginBottom:"-20px",paddingTop:"-40px"}}>
        <h1>Food, Agriculture & Farming</h1>
    </div>
   <Flex >
     <SimpleGrid border="0px solid yellow"   columns={[1]} width="400px" marginRight='20px'>
     <Box boxSize='sm'  backgroundImage="url('https://c4.wallpaperflare.com/wallpaper/147/545/208/nature-basket-apples-grapes-wallpaper-preview.jpg')">
     <div style={{
marginTop:"400px",
color:"white",
width:"250px",
fontSize:"17px",
textAlign:"left",
lineHeight:"30px",
marginLeft:"30px",
}}>
     <p>Dairy Products
Cooking Oil
Tractor
Cultivator

</p>
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
      <Card marginTop="28px" marginLeft="15px"><img height="110px" src="https://3.imimg.com/data3/IS/MS/GLADMIN-105901/rice-125x125.jpg" alt="" /></Card>
      <div style={{marginTop:"-15px",marginLeft:"15px"}}>
      <h5 style={{ textAlign:"left"}}>Rices</h5>
        <div style={{marginTop:"-10px",lineHeight:"20px", textAlign:"left",border:"0px solid red",fontSize:"14px"}}>
        <p style={{lineHeight:"13px"}} >Basmati</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Kolam</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Sona Masuri</p>
        </div>
      </div>
     </Box>
     <Box display="flex" height='160px' boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <Card marginTop="28px" marginLeft="15px"><img height="110px" width="100px" src="https://3.imimg.com/data3/JQ/XB/GLADMIN-3396/wheat-125x125.jpg" alt="" /></Card>
      <div style={{marginTop:"-15px",marginLeft:"15px"}}>
      <h5 style={{ textAlign:"left"}}>Wheat</h5>
        <div style={{marginTop:"-10px",lineHeight:"20px", textAlign:"left",border:"0px solid red",fontSize:"14px"}}>
        <p style={{lineHeight:"15px"}}>Milling Wheat</p>
        <p style={{marginTop:"0px"}}>Lokhawan</p>
        <p style={{marginTop:"0px"}}>Wheat grains</p>
        </div>
      </div>

     </Box>
     <Box display="flex" height='160px' boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <Card marginTop="28px" marginLeft="15px"><img height="110px" src="https://3.imimg.com/data3/QL/BL/GLADMIN-1571/pulses-125x125.jpg" alt="" /></Card>
      <div style={{marginTop:"-15px",marginLeft:"15px"}}>
      <h5 style={{ textAlign:"left"}}>Pulses</h5>
        <div style={{marginTop:"-10px",lineHeight:"20px", textAlign:"left",border:"0px solid red",fontSize:"14px"}}>
        <p style={{lineHeight:"13px"}} >Toor Daal</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>chana</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>moong</p>
        </div>
      </div>
     </Box>
     <Box display="flex" height='160px' boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <Card marginTop="28px" marginLeft="15px"><img height="110px" src="https://hm.imimg.com/imhome_gifs/veg01.png" alt="" /></Card>
      <div style={{marginTop:"-15px",marginLeft:"15px"}}>
      <h5 style={{ textAlign:"left"}}>Fresh Vegitables</h5>
        <div style={{marginTop:"-10px",lineHeight:"20px", textAlign:"left",border:"0px solid red",fontSize:"14px"}}>
        <p style={{lineHeight:"13px"}} >Potato</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>onion</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>chilli </p>
        </div>
      </div>
     </Box>
     <Box display="flex" height='160px' boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <Card marginTop="28px" marginLeft="15px"><img height="110px" src="https://5.imimg.com/data5/LO/QY/EQ/SELLER-84813594/garam-masala-powder-500x500.jpg" alt="" /></Card>
      <div style={{marginTop:"-15px",marginLeft:"15px"}}>
      <h5 style={{ textAlign:"left"}}>Whole spices</h5>
        <div style={{marginTop:"-10px",lineHeight:"20px", textAlign:"left",border:"0px solid red",fontSize:"14px"}}>
        <p style={{lineHeight:"13px"}} >pepper</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>turmeric</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>chilli poweder</p>
        </div>
      </div>
     </Box>
     <Box display="flex" height='160px' boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <Card marginTop="28px" marginLeft="15px"><img height="110px" src="https://5.imimg.com/data5/QK/BB/TN/SELLER-5388819/pumpkin-seeds-2--125x125.jpg" alt="" /></Card>
      <div style={{marginTop:"-15px",marginLeft:"15px"}}>
      <h5 style={{ textAlign:"left"}}>Seeds </h5>
        <div style={{marginTop:"-10px",lineHeight:"20px", textAlign:"left",border:"0px solid red",fontSize:"14px"}}>
        <p style={{lineHeight:"13px"}} >Vegi Seeds</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Hybrid</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>oil</p>
        </div>
      </div>
     </Box>
     <Box display="flex" height='160px' boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <Card marginTop="28px" marginLeft="15px"><img height="110px" src="https://5.imimg.com/data5/OP/LS/MY-1393371/mono-potassium-phosphate-foliar-fertilizers-125x125.jpg" alt="" /></Card>
      <div style={{marginTop:"-15px",marginLeft:"15px"}}>
      <h5 style={{ textAlign:"left"}}>Fertilizer</h5>
        <div style={{marginTop:"-10px",lineHeight:"20px", textAlign:"left",border:"0px solid red",fontSize:"14px"}}>
        <p style={{lineHeight:"13px"}} >organic</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Agriculture</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>boi </p>
        </div>
      </div>
     </Box>
     <Box display="flex" height='160px' boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <Card marginTop="28px" marginLeft="15px"><img height="110px" src="https://5.imimg.com/data5/KJ/GZ/SN/SELLER-11596263/alpler-disc-plough-125x125.jpg" alt="" /></Card>
      <div style={{marginTop:"-15px",marginLeft:"15px"}}>
      <h5 style={{ textAlign:"left"}}>Agriculture Tools</h5>
        <div style={{marginTop:"-10px",lineHeight:"20px", textAlign:"left",border:"0px solid red",fontSize:"14px"}}>
        <p style={{lineHeight:"13px"}} >disc</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}> icu</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Panel icu </p>
        </div>
      </div>
     </Box>
     <Box display="flex" height='160px' boxShadow=" rgba(99, 99, 99, 0.2) 0px 2px 8px 0px">
      <Card marginTop="28px" marginLeft="15px"><img height="110px" src="https://5.imimg.com/data5/ML/AA/SC/SELLER-4060804/manual-power-weeder-125x125.png" alt="" /></Card>
      <div style={{marginTop:"-15px",marginLeft:"15px"}}>
      <h5 style={{ textAlign:"left"}}>Agriculture Machinery</h5>
        <div style={{marginTop:"-10px",lineHeight:"20px", textAlign:"left",border:"0px solid red",fontSize:"14px"}}>
        <p style={{lineHeight:"13px"}} > Pharma bottels</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Invorter bottels</p>
        <p style={{marginTop:"0px",lineHeight:"13px"}}>Electric  bottels </p>
        </div>
      </div>
     </Box>
  
</SimpleGrid></Flex>

</Card>
</div>
    </div>
};
