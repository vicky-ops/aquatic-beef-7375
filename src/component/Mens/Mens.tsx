import { Grid, GridItem } from '@chakra-ui/layout'
import React,{useEffect, useState} from 'react'
import { getData } from '../api'
import { Product } from '../constant'
import ProductItem from '../ProductItem'

const Mens = () => {
    const [data,setData]=useState<Product[]>([])
useEffect(()=>{
getData("menw").then(res=>setData(res))
},[])

  return (
    <Grid templateColumns={{base:"repeat(1,1fr)", md:"repeat(3,1fr)",lg:"repeat(5,1fr)"}} gap={10} w="90%" m="auto">
    {data && data.map(ele=>(
      <GridItem>
      <ProductItem key={ele.title} {...ele} />
      </GridItem>
    ))}
    </Grid>
  )
}
export default Mens