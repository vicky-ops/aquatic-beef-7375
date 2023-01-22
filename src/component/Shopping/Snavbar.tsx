import React,{useState,useEffect} from 'react'

import { Flex, Image,Input,InputGroup,Text,Button,Box, Show,useMediaQuery
 } from '@chakra-ui/react'
 
 import { getData } from '../api' 
 import { Product } from '../constant'
 import { FaSearch } from 'react-icons/fa';

const Snavbar = () => {
  const [data,setData]=useState<Product[]>([])
  const [isLargerThan800] = useMediaQuery('(min-width: 768px)')
  let cardnu=data.length

 useEffect(()=>{
getData("cart").then(res=>setData(res)) 
 },[])
 console.log(data)

 
  return (
    <Flex justifyContent="space-evenly" h="100px" pos="sticky">
      <Box w="20%"> 
          <Image   src="https://i.ibb.co/Zc5Y127/logo-bharatmart2.png" alt="logo-bharatmart2" w="150px"  />
      </Box>
    <Flex mt={25} gap={10} >
     {isLargerThan800 &&
        <Box>
      <InputGroup>
      
      <Input placeholder='What are you looking for?' />
      <Button h="30px"  p={5}backgroundColor="#2a6462" color="white"><FaSearch/> Search</Button>
      </InputGroup>
      </Box>}

    <Box ><Button h="30px" p={5} backgroundColor="#2e3192" color="white">Card:<Text pl={2}>{cardnu}</Text></Button></Box>
    </Flex>
 </Flex>
  )
}

export default Snavbar