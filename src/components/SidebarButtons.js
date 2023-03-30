import React from "react";
import SingleButton from "./SingleButton";
import "../resources/styles.css"

const SidebarButtons = (props) => {
    const floors = props.floors;
    const addFloorSelection = props.addFloorSelection;
    const buttons = 10;

    const onButtonClick=(floorNumber)=>{
        addFloorSelection(floorNumber);
    }
    
    const buttonsMap = () =>{
        const buttonArr = [];
        for(let i = buttons - 1; i >=0 ; i--){
            buttonArr.push(<SingleButton buttonNumber={i} onButtonClick={onButtonClick} 
                floor={floors[i]}
            />);
        }
        return buttonArr;
    }

     return (
          <div className="SidebarButtonsContainer">
                {buttonsMap()}
          </div>
      );
};




export default SidebarButtons;
