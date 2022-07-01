import React, { useState } from "react";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UserRequest from "../3. UserLocation/3. UserRequest/UserRequest";
import Post from "../../Components/3. UserLocation/4. Post/Post";
import LocationApi from "../3. UserLocation/5. LocationApi/LocationApi";

function UserLocation({ setGender, setSelected }) {
  const [type, setType] = useState("countries");
  const [serviceProviderPostId, setServiceProviderPostId] = useState();
  const [selectValue, setSelectValue] = useState()
  const [postValue, setPostValue] = useState()
  const [col, setCol] = useState(true)

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
      <div className="row">
        <UserRequest
        setSelected={setSelected}
        />
        <Post
        selectValue={selectValue}
          postValue={postValue}
        />
        <LocationApi
          setSelectValue={setSelectValue}
          values={values}
          setValues={setValues}
          type={type}
          setServiceProviderPostId={setServiceProviderPostId}
          setType={setType}
          setSelected={setSelected}
          setPostValue={setPostValue}
          col={col}
        />
      </div>
    </>
  );
}

export default UserLocation;
