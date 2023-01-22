import React,{useEffect, useState} from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,Button, Heading
} from '@chakra-ui/react'
import { CartProps, Product } from '../constant';
import { getData } from '../api';
import { deleteProduct } from '../api';



const Cart = () => {

 const [data,setData]=useState<CartProps[]>([])
 const handleDelete=(id:number)=>{
  deleteProduct(id)
  
    }

 useEffect(()=>{

getData("cart").then(res=>setData(res))
 },[handleDelete])
 
    
 
return <>
 <Heading>Cart</Heading>
  <TableContainer >
  <Table variant='simple' width="100%" size={{base:"sm",sm:"sm",md:"md",lg:"lg"}}>
    <TableCaption>No Exchange | No refunds</TableCaption>
    <Thead >
      <Tr m={10} >
        <Th  >PRODUCT</Th>
        <Th >PRICE</Th>
        <Th >REMOVE FROM CART</Th>
      </Tr>
    </Thead>
   

    <Tbody >
     {data&&data.map(item=>(
      <Tr key={item.title}m={10}>
        <Td >{item.title}</Td>
        <Td >₹ {item.price}</Td>
        <Td >
          <Button onClick={()=>handleDelete(item.id)}>Remove from cart</Button>
        </Td>
      </Tr>
     ))}
    </Tbody>
   
    <Tfoot>
      <Tr>
        <Th >Final Price</Th>
        <Th >₹ {Math.round(data&&data.reduce((a,c)=>a+ Number(c.price),0))}</Th>
      
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>

  </>;
};

export default Cart