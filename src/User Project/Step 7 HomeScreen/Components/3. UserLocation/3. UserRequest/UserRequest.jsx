import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SearchUserRequest from "../3. UserRequest/SearchUserRequest";

function UserRequest() {
  
  return (
    <>
      <div className="col-3">
              <div ><SearchUserRequest/></div>
              <h1>Apply here</h1>
      </div>
    </>
  );
}

export default UserRequest;
