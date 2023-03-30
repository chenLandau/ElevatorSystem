import React from "react";
import { useState,useEffect } from 'react';
import "../resources/styles.css";

const SingleButton= (props) => {

    const {buttonNumber, onButtonClick,floor} = props;
    const [label, setLabel] = useState('Call');
    const [backGroundcolor,setColor] = useState("rgb(89, 198, 112)");
    const [textColor,setTextColor] = useState("white");
    const [borderColor,setBorderColor] = useState(backGroundcolor);

    useEffect(()=>{
      if(floor.isArrived === true) {
        setColor('rgb(215, 215, 215)');
        setTextColor("rgb(89, 198, 112)");
        setLabel('Arrived');
        setBorderColor("rgb(89, 198, 112)")
      }
      else if (floor.isArrived === false) {
        setLabel('Call');
        setTextColor("white");
        setColor('rgb(89, 198, 112)');
        setBorderColor(backGroundcolor);
      }
    },[floor.isArrived]);

   
    const handleClick = () => {
      setColor('red');
      setBorderColor('red');
      setLabel('Waiting');
      onButtonClick(buttonNumber); 
    }
    return (
      <div className="SingleButtonComponent">
        <button  style={{ backgroundColor: backGroundcolor, color: textColor, borderColor: borderColor }} 
        onClick={handleClick}>{label}</button>               
      </div>
  );
};
   

export default SingleButton;