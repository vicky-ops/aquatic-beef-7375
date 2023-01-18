import React from 'react'

import { Flex, Image,Input,InputGroup,

  
  Button,Box
 } from '@chakra-ui/react'
 import { SearchIcon} from '@chakra-ui/icons'

const Snavbar = () => {
  return (
    <Flex justifyContent="space-evenly" h="100px">
      <Box w="20%"> 
          <Image   src="https://i.ibb.co/Zc5Y127/logo-bharatmart2.png" alt="logo-bharatmart2" w="150px"  />
      </Box>
    <Flex mt={25} gap={10} >
      <Box>
      <InputGroup>
      
      <Input placeholder='What are you looking for?' p={12} />
      <Button h="30px" p={20} backgroundColor="#2a6462" color="white"><SearchIcon mr={3}/> Search</Button>
      </InputGroup>
    
    </Box>
    <Box><Button h="30px" p={20} backgroundColor="#2e3192" color="white">Bulk Order</Button></Box>
    </Flex>
 </Flex>
  )
}

export default Snavbar