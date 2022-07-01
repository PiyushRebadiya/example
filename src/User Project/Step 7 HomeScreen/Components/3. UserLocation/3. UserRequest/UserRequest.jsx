import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SearchUserRequest from "../3. UserRequest/SearchUserRequest";
import LocationApi from "../5. LocationApi/LocationApi";

function UserRequest({setSelected}) {
  const [type, setType] = useState("countries");
  const [serviceProviderPostId, setServiceProviderPostId] = useState();

  const [serviceProvider, setServiceProvider] = useState([]);
  const [values, setValues] = useState({
    country: {
      id: "",
      name: "",
    },
    state: {
      id: "",
      name: "",
    },
    city: {
      id: "",
      name: "",
    },
    area: {
      id: "",
      name: "",
    },
    apartment: {
      id: "",
      name: "",
    },
    village: {
      id: "",
      name: "",
    },
  });

  
  return (
    <>
      <div className="col-3">
              <div ><SearchUserRequest/></div>
        <h1>Apply here</h1>
        <LocationApi
        values={values}
        setValues={setValues}
        type={type}
        setServiceProviderPostId={setServiceProviderPostId}
          setType={setType}
          setSelected={setSelected}
        />
      </div>
    </>
  );
}

export default UserRequest;
