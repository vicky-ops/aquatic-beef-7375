import React from "react";
import { Footbar } from "./Footbar";
import { Mainbar } from "./MainBar";
import { MainLanding } from "./MainLanding";
import { Navbar } from "./Navbar";

const Landing=()=>{
    return(
        <div>
            <Navbar/>
            <Mainbar/>
            <MainLanding/>
            <Footbar/>
        </div>
    )
}
export default Landing