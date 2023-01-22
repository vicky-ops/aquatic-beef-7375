import axios,{AxiosResponse} from "axios"
import { Product } from "./constant"


export const getData=async(input:string)=>{
let res=await axios.get(`https://bharatmart.onrender.com/${input}`)
return res.data
}

export const addData=async(data:Product)=>{
   let res=await axios.post("https://bharatmart.onrender.com/cart",data)
    return res.data
    
    }
    export const deleteProduct=(id:number)=>{
      axios.delete(`https://bharatmart.onrender.com/cart/${id}`)
  }
 