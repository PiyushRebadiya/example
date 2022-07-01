import './App.css';
import { Route, Routes } from "react-router-dom";
import React from "react";
import HomeScreen from "./User Project/Step 7 HomeScreen/HomeScreen";


function App() {
  return (
    <div className="App">
      <Routes >
        <Route exact path="/home" element={<HomeScreen />} />
      </Routes>
    </div>
  );
}

export default App;
