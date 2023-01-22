import React,{useState} from 'react'

import Snavbar from '../component/Shopping/Snavbar'
import Category from '../component/Shopping/category'
import { Image,Flex,Heading,Text } from '@chakra-ui/react'
import Ladies from '../component/Ladies/Ladies'
import Mens from '../component/Mens/Mens'
import Footwear from '../component/Footwear/Footwear'
import Industrial from '../component/Industrial/Industrial'
import Cart from '../component/Cart/Cart'
import { Navbar } from '../sachin/components/Navbar'
import { Footbar } from '../sachin/components/Footbar'
const Shome = () => {
  const [change,setChange]=useState<Boolean>(false)

  const handleChange=()=>{
    setChange(prev=>!prev)
  }
  return (
    <>
    <Navbar/>
    <Snavbar  />
    <Category/>
    <Flex backgroundImage="https://shopping.imimg.com/style/mBnr.webp" p={30} justify="space-around" w="90%"  m="auto" direction={{base:"column",lg:"row"}}>
      <Flex direction="column"   gap={{base:"10px",lg:"20px"}} >
        <Heading   color="#97daff">
          Discover
        </Heading>
        <Text fontSize={30} color="white">Winter Collection</Text>
        <Text fontSize={20} color="#97daff">On IndiaMart</Text>
      </Flex>
      <Flex mt={{base:"20px",}}>
      <Image  src="https://shopping.imimg.com/style/b1.webp" w={{base:"50%"}} />
     <Image src="https://shopping.imimg.com/style/b2.webp" w={{base:"50%"}} />
      </Flex>
      
    </Flex>
    <Heading size="lg" as="h1" m={20}>Ladies Wear</Heading>
    <Ladies/>
    <Heading size="lg" as="h1" m={20}>Mens Wear</Heading>
    <Mens/>
    <Heading size="lg" as="h1" m={20}>Footwear </Heading>
    <Footwear/>
    <Heading size="lg" as="h1" m={20}>Industrial Chemical </Heading>
    <Industrial/>
<Footbar/>
    </>
  )
}

export default Shome