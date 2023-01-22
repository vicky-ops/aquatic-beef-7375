import React,{useState,useEffect} from 'react'

import { Flex, Image,Input,InputGroup,Text,Button,Box, Show,useMediaQuery, localStorageManager
 } from '@chakra-ui/react'
 import { SearchIcon} from '@chakra-ui/icons'
 import { getData } from '../api'
 import { Product } from '../constant'
 
 


const Snavbar = () => {
  const [data,setData]=useState<Product[]>([])
  const [isLargerThan800] = useMediaQuery('(min-width: 768px)')



 


 useEffect(()=>{
getData("cart").then(res=>setData(res)) 
 },[])



 
  return (
    <Flex justifyContent="space-evenly" h="100px" position="sticky" mb={10}>
      <Box w="20%"> 
          <Image   src="https://i.ibb.co/Zc5Y127/logo-bharatmart2.png" alt="logo-bharatmart2" w="150px"  />
      </Box>
    <Flex mt={25} gap={10} >
     {isLargerThan800 &&
        <Box>
      <InputGroup>
      
      <Input placeholder='What are you looking for?' />
      <Button h="30px"  p={5}backgroundColor="#2a6462" color="white"><SearchIcon mr={3}/> Search</Button>
      </InputGroup>
      </Box>}

    <Box ><Button h="30px" p={5} backgroundColor="#2e3192" color="white">Cart:<Text pl={2}>{data.length}</Text></Button></Box>
    </Flex>
 </Flex>
  )
}

export default Snavbar


