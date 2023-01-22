import React from 'react'
import { Image,Box,Text,Grid, GridItem,Flex} from '@chakra-ui/react'
import { RepeatClockIcon } from '@chakra-ui/icons'
type CategoryProps={
  image:string,
  title:string
}
const category:CategoryProps[]= [
  {
   "image": "https://shopping.imimg.com/style/ladies-wear.png",
   "title": "Ladies Wear"
  },
  {
   "image": "https://shopping.imimg.com/style/men-wear.png",
   "title": "Men Wear"
  },
  {
   "image": "https://shopping.imimg.com/style/footwear.png",
   "title": "Footwear"
  },
  {
   "image": "https://shopping.imimg.com/style/beauty-products.png",
   "title": "Beauty Products"
  },
  {
   "image": "https://shopping.imimg.com/style/mobile-accessories.png",
   "title": "Mobile Accessories"
  },
  {
   "image": "https://shopping.imimg.com/style/home-decor.png",
   "title": "Home Decor"
  },
 
  {
   "image": "https://shopping.imimg.com/style/light.png",
   "title": "Light"
  },
  {
   "image": "https://shopping.imimg.com/style/industrial-chemicals.png",
   "title": "Industrial Chemicals"
  }
 ]


  

const Category = () => {

  
  return (
    <>
    <Grid justifyContent="space-around" alignItems="center" 
     templateColumns={{ base:"repeat(4,1fr)",md:"repeat(8,1fr)"}}m={30} gap={5}>
    {category.map(ele=>(
      <GridItem key={ele.title} >
      <Flex direction="column" gap={5}>
        <Image src={ele.image} alt={ele.title} width="40%"/>
        <Text>{ele.title}</Text>
      </Flex>
      </GridItem>
     
      
    ))}
    </Grid>
    </>
  )
}

export default Category