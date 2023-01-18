import React from 'react'
import { Image,Box,Text,Flex } from '@chakra-ui/react'
const category= [
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
    <Flex justify="space-around"  m={30} gap={5}>
    {category.map(ele=>(
      <Box>
        <Image src={ele.image} alt={ele.title}/>
        <Text>{ele.title}</Text>
      </Box>
     
      
    ))}
    </Flex>
    </>
  )
}

export default Category