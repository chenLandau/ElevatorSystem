import React from "react";
import "../resources/styles.css"

const FloorLabels = () => {
    const labels = 10;

    const floorLabelsMap = () =>{
        const buttonArr = [];
        for(let i = labels - 1; i >=0 ; i--){
            if(i===0)
                buttonArr.push(<label htmlFor="Ground Floor">{'Ground Floor'}</label>);
            else if(i===2 || i===3)
                 buttonArr.push(<label htmlFor="Ground Floor">{i+'nd'}</label>);
            else
                buttonArr.push(<label htmlFor="Ground Floor">{i+'th'}</label>);
        }
        return buttonArr;
    }

     return (
          <div className="SidebarButtonsContainer">
                {floorLabelsMap()}
          </div>
      );
};


export default FloorLabels;
