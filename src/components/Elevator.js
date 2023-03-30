import React, { useState,useEffect,useRef } from "react";
import "../resources/styles.css"
import {ReactComponent as MyIcon} from '../resources/icons8-elevator.svg';
import audioFile from '../resources/elevator_bell.mp3';
export const FLOOR_HEIGHT = 50;

const Elevator = ({elevator,onTransitionEnd}) => {
    const [position = 0, setPosition] = useState();
    const audioRef = useRef(null);
    const color = elevator.state === "available" ? "black" : elevator.state === "moving" ? "red" : "green";

    useEffect(()=>{
        if(elevator.state === "moving"){

            if(elevator.targerFloor > elevator.currentFloor){
                moveElevator(position - (elevator.targerFloor-elevator.currentFloor) * FLOOR_HEIGHT);
            }
            else if(elevator.targerFloor < elevator.currentFloor){
                moveElevator(position + (elevator.currentFloor-elevator.targerFloor) * FLOOR_HEIGHT);
            }
            else {
                handleTransitionEnd(position);
            }
        }
    },[elevator.state]);
    
    const handleTransitionEnd = (newIconPosition)=> {
            setPosition(newIconPosition);
            audioRef.current.play(); 
            onTransitionEnd(elevator.id, elevator.targerFloor);
    }

    const moveElevator = (newIconPosition) =>{
        var myComponent = document.getElementById(elevator.id);
        myComponent.style.transform = "translateY(" + newIconPosition + "px)";

        myComponent.addEventListener("transitionend", function (event) {
            if(event.propertyName ==="transform"){
                handleTransitionEnd(newIconPosition);
            }
        });
   };
  

   return (<div id="myComponent" className="ElevatorContainer" >
            <audio src={audioFile} ref={audioRef} />
             <MyIcon id={elevator.id} className="move" fill={color}/>
            </div>
            );
};
export default Elevator;

