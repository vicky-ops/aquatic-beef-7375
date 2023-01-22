import React, { useEffect, useState } from "react";

import { getTodos, htl, lth, hP, APple, DEll,LEnovo,ACer,TOshiba,MIcrosoft } from "./api";
import Card from "./Card";
import { Product } from "./constant";
import axios, { AxiosResponse } from "axios"
import Sidebar from "./Sidebar";
import { Grid, GridItem,Button,Image,Select } from '@chakra-ui/react'

const Laptop2 = () => {
    const [laptop, setLaptop] = useState<Product[]>([])

    const [visible, setVisible] = useState(15)

    const showMore = () => {
        setVisible((prev) => prev + 15)
    }
  
    const hp = () => {
        hP().then((res) => {
            setLaptop(res)
        })
    }
    const apple = () => {
        APple().then((res) => {
            setLaptop(res)
        })
    }
    const dell = () => {
        DEll().then((res) => {
            setLaptop(res)
        })
    }
    const acer = () => {
        ACer().then((res) => {
            setLaptop(res)
        })
    }
    const microsoft = () => {
        MIcrosoft().then((res) => {
            setLaptop(res)
        })
    }
    const lenovo = () => {
        LEnovo().then((res) => {
            setLaptop(res)
        })
    }
    const toshiba = () => {
        TOshiba().then((res) => {
            setLaptop(res)
        })
    }

   

    const HandleChange =(e:React.ChangeEvent<HTMLSelectElement>):void=> {
        if (e.target.value === "asc") {
            lth().then((res) => {
                setLaptop(res)
            })
        } else if (e.target.value === "dsc") {
            htl().then((res) => {
                setLaptop(res)
            })
        } else if (e.target.value === "all") {
            getTodos().then((res) => {
                setLaptop(res)
            })
        }
    }
   

        useEffect(() => {
            getTodos().then((res) => {

                setLaptop(res)
                console.log(res);

            })
        }, [])

        return (
        <Grid>
            

          

           <GridItem  >
                <Select onChange={HandleChange} > Sort by: All
                    <option value="all">Sort by: All</option>
                    <option value="asc">Price (Low to High)</option>
                    <option value="dsc">Price (High to Low)</option>
                </Select>
            </GridItem>  
            <GridItem className="filter"  >
            <GridItem >
              <Image style={{width:"30px",height:"30px",cursor:"pointer"}} onClick={hp} src="https://cdn.freebiesupply.com/images/large/2x/hewlett-packard-logo-black-and-white.png" alt="hp" />

            </GridItem>
            <GridItem>
            <Image style={{width:"30px",height:"30px",cursor:"pointer"}} onClick={dell} src="https://www.freeiconspng.com/thumbs/dell-logo-icon-png/dell-icon-11.jpg" alt="dell" />
            </GridItem>
       
            <GridItem>
            <Image style={{width:"30px",height:"30px",cursor:"pointer"}} onClick={apple} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c516.png" alt="apple" />
            </GridItem>
            <GridItem>
            <Image style={{width:"70px",height:"30px",cursor:"pointer"}} onClick={lenovo} src="https://www.pngmart.com/files/4/Lenovo-Logo-Transparent-PNG.png" alt="lenovo" />
            </GridItem>
            <GridItem>
            <Image style={{width:"70px",height:"30px",cursor:"pointer"}} onClick={microsoft} src="https://www.freepnglogos.com/uploads/microsoft-logo-png-transparent-20.png" alt="ms" />
            </GridItem>
            <GridItem>
            <Image style={{width:"60px",height:"30px",cursor:"pointer"}} onClick={acer} src="https://w7.pngwing.com/pngs/505/721/png-transparent-laptop-acer-iconia-tab-a500-acer-aspire-computer-laptop-electronics-text-trademark.png" alt="acer" />
            </GridItem>
            <GridItem>
            <Image style={{width:"70px",height:"30px",cursor:"pointer"}} onClick={toshiba} src="https://cdn.freebiesupply.com/images/large/2x/toshiba-logo-png-transparent.png" alt="toshiba" />
            </GridItem>
            </GridItem>

            <GridItem style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }} >{laptop?.slice(0, visible).map((el) => {
                return <Sidebar key={el.id} {...el} />
            })}</GridItem>
            <Button  onClick={showMore} >Show More</Button>
</Grid>

)
        }
    

export default Laptop2

