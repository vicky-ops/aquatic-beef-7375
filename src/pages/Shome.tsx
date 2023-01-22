import React from 'react'
import Snavbar from '../component/Shopping/Snavbar'
import Category from '../component/Shopping/category'
import { Image,Flex,Heading,Text } from '@chakra-ui/react'
import Ladies from '../component/Ladies/Ladies'
import Mens from '../component/Mens/Mens'
import Footwear from '../component/Footwear/Footwear'
import Industrial from '../component/Industrial/Industrial'

const Shome = () => {
  return (
    <>
    <Snavbar/>
    <Category/>
    <Flex backgroundImage="https://shopping.imimg.com/style/mBnr.webp" p={30} justify="space-between" w="88%" m="auto">
      <Flex direction="column" pl={100} >
        <Heading   color="#97daff">
          Discover
        </Heading>
        <Text fontSize={30} color="white">Winter Collection</Text>
        <Text fontSize={20} color="#97daff">On IndiaMart</Text>
      </Flex>
      <Flex>
      <Image  src="https://shopping.imimg.com/style/b1.webp"/>
    <Image src="https://shopping.imimg.com/style/b2.webp"/>
      </Flex>
      
    </Flex>
    <Heading size="lg" as="h1">Ladies Wear</Heading>
    <Ladies/>
    <Heading size="lg" as="h1">Mens Wear</Heading>
    <Mens/>
    <Heading size="lg" as="h1">Footwear </Heading>
    <Footwear/>
    <Heading size="lg" as="h1">Industrial Chemical </Heading>
    <Industrial/>
    </>
  )
}

export default Shome