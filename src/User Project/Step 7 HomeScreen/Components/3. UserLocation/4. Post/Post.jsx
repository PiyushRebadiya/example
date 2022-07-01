import React, { useEffect, useState } from "react";
import '../../../CSS/Modal.css'
import "../../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UserPost from "../4. Post/UserPost";
import axios from "axios";

function Post({ selectValue, postValue }) {
  const [value, setValue] = useState("")
  const [confirm, setConfirm] = useState("")
  
  useEffect(() => {
    if (selectValue) {
      if (postValue == "Country") {
        setValue(selectValue.countryName)
      } else if (postValue == "State") {
        setValue(selectValue.stateName)
      } else if (postValue == "City") {
        setValue(selectValue.cityName)
      } else if (postValue == "Area") {
        setValue(selectValue.areaName)
      } else if (postValue == "Apartment") {
        setValue(selectValue.apartmentName)
      } else if (postValue == "Village") {
        setValue(selectValue.villageName)
      } else {
      }
    }
  })

  const confirmAPIhandler = async () => {
    await axios.post("http://api-maa.in.net/maa/selection/add", selectValue)
    .then((response) => {
      console.log("response",response);
      setConfirm(true)
    });

  }

  
  return (
    <>
      <div className="col-4" style={{background:"white"}}>
          <div>
          <UserPost />
          {
            !selectValue
            ?
            <h1>This is post Area, do not disturb</h1>
              :
          <div style={{height:"auto",width:"100%",marginBottom:"10px"}}>
            <div style={{color:"white",background:"green"}}>
              <h1 style={{marginBottom:0}}>Please Confirm Your Location</h1>
            </div>
            <div style={{background:"white"}}>
              <p style={{paddingTop:"10px"}}>{`${postValue}`}</p>
              <p>{value}</p>
                  <p className={!selectValue?.servicePrice && "colorRed"}>{selectValue?.servicePrice ? `price ${selectValue.servicePrice} rs.` : `Please Update Service Price`}</p>
              <button className="btn btn-primary" style={{marginBottom:"10px"}} onClick={() => confirmAPIhandler()}>Add To Cart</button>
              {
                confirm && <p style={{paddingBottom:"20px"}}>Thank you for choosing Location</p>
              }
            </div>
          </div>
          }
          </div> 
      </div>
    </>
  );
}

export default Post;
