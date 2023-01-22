import { Grid, GridItem } from '@chakra-ui/layout'
import React,{useEffect, useState} from 'react'
import { getData } from '../api'
import { Product } from '../constant'
import ProductItem from '../ProductItem'

const Footwear = () => {
    const [data,setData]=useState<Product[]>([])
useEffect(()=>{
getData("footwear").then(res=>setData(res))
},[])
  return (
    <Grid gridTemplateColumns="repeat(4,1fr)" gap={20} w="90%" m="auto" mt={50}>
    {data && data.map(ele=>(
      <GridItem>
      <ProductItem key={ele.title} {...ele}/>
      </GridItem>
    ))}
    </Grid>
  )
}
export default Footwear