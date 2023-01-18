import React from 'react'
import Snavbar from '../component/Shopping/Snavbar'
import Category from '../component/Shopping/category'
import { Image,Flex } from '@chakra-ui/react'

const Shome = () => {
  return (
    <>
    <Snavbar/>
    <Category/>
    <Flex backgroundImage="https://shopping.imimg.com/style/mBnr.webp" p={30} justify="flex-end" w="88%" m="auto">
       <Image  src="https://shopping.imimg.com/style/b1.webp"/>
    <Image src="https://shopping.imimg.com/style/b2.webp"/>
    </Flex>
    
    </>
  )
}

export default Shome