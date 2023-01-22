import { Card,  CardBody, Image,Stack,Heading,Text,Button,ButtonGroup} from '@chakra-ui/react'
import React from 'react'
import { Product } from './constant'


const ProductItem = ({image,title,price,brand}:Product) => {
  return (
    <>
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={image} alt={title}
      borderRadius='lg' w="60%"
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
  <Button w="100px" m="auto" mt={10} backgroundColor="#2e3192" color="white" p={3}>Add to cart</Button>
  
</Card>
    </>
  )
}

export default ProductItem