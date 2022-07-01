import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "../Step 7 HomeScreen/Components/1. Header/Header";
import Option from "../Step 7 HomeScreen/Components/2. Option/Option";
import UserLocation from "../Step 7 HomeScreen/Components/3. UserLocation/UserLocation";

function HomeScreen() {
  const genderValue = localStorage.getItem("gender");
  const [gender, setGender] = useState(genderValue);
  const [selected, setSelected] = useState({});

  localStorage.setItem("loginServiceProviderGender", "MALE");
  localStorage.setItem("userId", 927);

  const myStyle = {
    backgroundColor: "rgb(248, 248, 248)",
  };

  return (
    <>
      <div className="container-fluid" style={myStyle}>
        <Header gender={gender} setGender={setGender} />
        <Option selected={selected} />
        <UserLocation setGender={setGender} setSelected={setSelected} />
      </div>
    </>
  );
}

export default HomeScreen;
