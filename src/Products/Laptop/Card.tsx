import React,{useState} from "react";
import { Product } from "./constant";
import "./Modal.css";




const Card=({id,image,title,name,brand,price,ram,hard_drive_size,pns_h}:Product)=>{
    const [modal, setModal] = useState(false);
    

    const toggleModal = () => {
        setModal(!modal);
      };
    const submitModal = () => {
        setModal(!modal);
        
    alert("Supplier will Call you sortly")
      };
    
      if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }
     
    return <div style={{margin:"20px",boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}} >
    <img  style={{height:"300px",width:"100%"}} src={image} alt={title} />
    <p style={{color:"blue"}} >{title} {ram},{hard_drive_size}</p>
    <p style={{color:"teal"}}>{name}</p>
    <h3 style={{color:"teal",fontWeight:"bold"}}>{brand}</h3>
    <p>{id}</p>
    <p>&#x20b9;{price} </p>
    {/* <p>{ram}</p>
    <p>{hard_drive_size}</p> */}
    <p>Call {pns_h}</p>
    <button onClick={toggleModal} style={{background:"#047a70",borderRadius:"5px",border:"none",height:"30px",width:"140px",color:"white",fontWeight:"bold",cursor:"pointer",margin:"5px"}} >Contact Supplier</button>
    {modal && (
        <div className="modal" >
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">

            <h2 style={{fontWeight:"bold",color:"teal"}} >Contact Seller</h2>
            <div style={{display:"flex"}}>
            <div style={{width:"35%",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",margin:"10px"}}>
            <img style={{width:"200px",height:"210px"}} src={image} alt="hh" />
            <p style={{color:"teal",margin:"5px",fontWeight:"bold"}}>Brand: {brand}</p>
            <p  style={{color:"gray",margin:"5px"}} >{title} {ram},{hard_drive_size}</p>

            </div>
           <div style={{justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column",margin:"10px",boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <h2 style={{color:"#047a70",fontSize:"25px",fontWeight:"bold"}} >Enter Your Phone-Number </h2>
           <input style={{width:"80%",border:"1px solid gray"}} type="number" placeholder="Enter Your Phone-Number" />
           <br/>
           <button onClick={submitModal} style={{background:"#047a70",borderRadius:"5px",border:"none",height:"30px",width:"140px",color:"white",fontWeight:"bold",cursor:"pointer",margin:"5px"}} >Submit</button>
           <p style={{color:"#047a70",margin:"5px"}} >You are just a click away to get quotes from sellers</p>

           </div>
       
           </div>
     
            <img className="close-modal" onClick={toggleModal} src="https://www.freeiconspng.com/thumbs/close-icon/black-close-icon-3.png" style={{width:"36px",height:"36px"}} alt="" />
          </div>
        </div>
      )}
     
   
    </div>
       
    
}
export default Card