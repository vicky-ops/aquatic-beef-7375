import { Card,  CardBody, Image,Stack,Heading,Text,Button,ButtonGroup} from '@chakra-ui/react'
import axios from 'axios'
import React,{useState} from 'react'
import { addData } from './api'


import { Product } from './constant'





const ProductItem = (ele:Product) => {
  const{image,title,price,brand}=ele

  const handleAdd=()=>{
    addData(ele).then(res=>console.log(res))
  }
 
 

 
  return (
    <>
    <Card maxW='sm' p={10}>
  <CardBody>
    <Image
      src={image} alt={title}
      borderRadius='lg' w="100%"
    />
    <Stack mt='6' spacing='5'>
      <Heading size='sm' as="h3">{brand}</Heading>
      <Text>
       {title}
      </Text>
      <Heading as="h4"color='blue.600' fontSize='2xl'>
      ₹ {price}
      </Heading>
      
 

     
    </Stack>
  </CardBody>
  <Button w="100px" m="auto"  backgroundColor="#2e3192" color="white" p={3} onClick={handleAdd}>Add To Cart</Button>
 
  
</Card>
    </>
  )
}

export default ProductItem