import { SimpleGrid,Box } from '@chakra-ui/react'

export const Mainbar=()=>{

    return <div>
<div>
<SimpleGrid border="0px solid yellow"   columns={[1]} width="100%" marginRight='20px'>
     <Box boxSize='sm'  backgroundImage="url('https://media.istockphoto.com/id/1291177121/photo/low-angle-of-tall-building-in-manhattan.jpg?b=1&s=170667a&w=0&k=20&c=Mq9Qm3UjzrqNKs6HFOFNJps-P9z4ijK1aTx1nP4gEes=')">
     <div style={{
marginTop:"200px",
color:"white",
width:"100%",
fontSize:"17px",
textAlign:"left",
lineHeight:"30px",
marginLeft:"30px",
}}>
    <div>
        <div style={{border:"1px solid black",width:"150px", height:"40px"}}></div>
    <input type="text" placeholder='Enter product/Services Names' />
    </div>
</div>
</Box>


     
  
    </SimpleGrid>
</div>


    </div>
}