import React from "react";
import Floor from "./Floor";
import "../resources/styles.css"

const Shaft = (props) => {
    const {floorsNumber,elevator,onTransitionEnd} = props; 

    const floorsMap = () =>{
        const floorsArr = [];
        for(let i= floorsNumber - 1;i >=0; i--){
            floorsArr.push(<Floor floorNumber={i} elevator={elevator} onTransitionEnd={onTransitionEnd} />);
        }
        return floorsArr;
    }

     return (
          <div className="ShaftContainer">
           {floorsMap()}
          </div>
      );
};

export default Shaft;