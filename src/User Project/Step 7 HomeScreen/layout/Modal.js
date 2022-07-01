import React from "react";
import '../CSS/Modal.css'

const modalStyles = {
  position: "fixed",
  left: "25%",
  width: "40%",
  height: "auto",
  background: "white",
  border: "1px solid black",
  padding: "20px",
  top: "20%",
  zIndex:1
};

const Modal = ({ canShow, updateModalState, modalData ,inputValue,changeHandler,priceUpdateHandler}) => {
    let {value,placeholder,title,saveButton,updateId} = modalData;
  if (canShow) {
    return (
        <div style={modalStyles} >
        <h1>{title}</h1>
        <input
          value={inputValue}
          placeholder={placeholder}
          style={{ marginBottom: "10px" }}
          onChange={(e) => changeHandler(e)}
        />
        <br />
        <button
          onClick={() => priceUpdateHandler(updateId,value)}
          className="btn btn-primary"
          style={{ marginRight: "15px" }}
        >
          {saveButton}
        </button>
        <button onClick={updateModalState} className="btn btn-secondary">
          Cancel
        </button>
      </div>
    );
  }

  return null;
};

export default Modal;