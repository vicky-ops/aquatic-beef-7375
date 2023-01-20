import axios from "axios"


export const getData=async(input:string)=>{
let res=await axios.get(`https://bharatmart.onrender.com/${input}`)
return res.data
}