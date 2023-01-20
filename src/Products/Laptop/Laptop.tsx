import React, { useEffect, useState } from "react";

import { getTodos, htl, lth, hP, APple, DEll } from "./api";
import Card from "./Card";
import { Product } from "./constant";
import axios, { AxiosResponse } from "axios"

const Laptop = () => {
    const [laptop, setLaptop] = useState<Product[]>([])

    const [visible, setVisible] = useState(15)

    const showMore = () => {
        setVisible((prev) => prev + 15)
    }
    // const low=()=>{
    //     lth().then((res)=>{
    //         setLaptop(res)
    //     })
    // }
    // const high=()=>{
    //     htl().then((res)=>{
    //         setLaptop(res)
    //     })
    // }
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

    // function HandleChange(e: { target: { value: string; }; }){
    //     if(e.target.value==="asc"){
    //         htl().then((res)=>{
    //             setLaptop(res)
    //         })
    //     }else if(e.target.value==="dsc"){
    //         lth().then((res)=>{
    //             setLaptop(res)
    //         })
    //     }else if(e.target.value==="all"){
    //         getTodos().then((res)=>{
    //             setLaptop(res)
    //         })
    //     }

    const HandleChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value === "asc") {
            htl().then((res) => {
                setLaptop(res)
            })
        } else if (e.target.value === "dsc") {
            lth().then((res) => {
                setLaptop(res)
            })
        } else if (e.target.value === "all") {
            getTodos().then((res) => {
                setLaptop(res)
            })
        }



        useEffect(() => {
            getTodos().then((res) => {

                setLaptop(res)
                console.log(res);

            })
        }, [])

        return (<div>
            <h1>laptop</h1>

            <div>
                {/* <button onClick={low} >low to high</button>
 <button  onClick={high} >high to low</button> */}
                <h3>Filter</h3>
                <button onClick={hp}  >HP</button>
                <button onClick={apple} >Apple</button>
                <button onClick={dell} >Dell</button></div>

           <div>
                <select onChange={HandleChange}  > Sort by: All
                    <option value="all">Sort by: All</option>
                    <option value="asc">Price (Low to High)</option>
                    <option value="dsc">Price (High to Low)</option>
                </select>
            </div>  




            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }} >{laptop?.slice(0, visible).map((el) => {
                return <Card key={el.id} {...el} />
            })}</div>
            <button onClick={showMore} >Show More</button>




        </div>

)
        }
    }

export default Laptop

