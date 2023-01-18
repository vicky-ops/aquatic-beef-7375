import axios,{AxiosResponse} from "axios"
import { Product } from "./constant"
export const getTodos = async ()=>{
    let res: AxiosResponse<Product[]>  = await axios.get("https://bharatmart.onrender.com/laptop")
    return res.data
}
// https://bharatmart.onrender.com/laptop

// https://bharatmart.onrender.com/phones