import axios,{AxiosResponse} from "axios"
import { Product } from "./constant"
export const getTodos = async ()=>{
    let res: AxiosResponse<Product[]>  = await axios.get("https://bharatmart.onrender.com/laptop")
    return res.data
}
export const lth = async()=>{
    let res: AxiosResponse<Product[]>  = await axios.get("https://bharatmart.onrender.com/laptop/?_sort=price&_order=asc")
    return res.data
}
export const htl = async()=>{
    let res: AxiosResponse<Product[]>  = await axios.get("https://bharatmart.onrender.com/laptop/?_sort=price&_order=desc")
    return res.data
}
export const hP = async()=>{
    let res: AxiosResponse<Product[]>  = await axios.get("https://bharatmart.onrender.com/laptop/?brand=HP")
    return res.data
}
export const APple = async()=>{
    let res: AxiosResponse<Product[]>  = await axios.get("https://bharatmart.onrender.com/laptop/?brand=Apple")
    return res.data
}
export const DEll = async()=>{
    let res: AxiosResponse<Product[]>  = await axios.get("https://bharatmart.onrender.com/laptop/?brand=Dell")
    return res.data
}
export const LEnovo = async()=>{
    let res: AxiosResponse<Product[]>  = await axios.get("https://bharatmart.onrender.com/laptop/?brand=Lenovo")
    return res.data
}
export const MIcrosoft = async()=>{
    let res: AxiosResponse<Product[]>  = await axios.get("https://bharatmart.onrender.com/laptop/?brand=Microsoft")
    return res.data
}
export const ACer = async()=>{
    let res: AxiosResponse<Product[]>  = await axios.get("https://bharatmart.onrender.com/laptop/?brand=Acer")
    return res.data
}
export const TOshiba = async()=>{
    let res: AxiosResponse<Product[]>  = await axios.get("https://bharatmart.onrender.com/laptop/?brand=Toshiba")
    return res.data
}
// https://bharatmart.onrender.com/laptop

// https://bharatmart.onrender.com/phones