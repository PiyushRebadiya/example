import React, { useEffect, useState } from "react";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import { useNavigate } from "react-router-dom";
import axios from "axios";

const myStyle = {
  height: "50px",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};

function Option() {

  return (
    <>
      <div className="row" style={myStyle}>
      </div>
    </>
  );
}

export default Option;
