import React from "react";
import { Route, Routes } from "react-router-dom"
import Landing from "./Landing";
import Laptop from "../Products/Laptop";
const Mainroute=()=>{
    return(
        <div>
  <Routes>
        <Route path="/" element={<Landing />} />
       
       
        <Route path="/product" element={<Laptop/>} />
        <Route path="*" element={ <h3>Page Not Found</h3> } />
    </Routes>
        </div>
    )
}
export default Mainroute