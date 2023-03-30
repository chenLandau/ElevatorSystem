import React from "react";
import Shaft from "./Shatf";
import FloorLabels from "./FloorLabels";
import SidebarButtons from "./SidebarButtons";
import { useState } from "react";
import "../resources/styles.css";

export const MOVING = "moving";
export const ARRIVED = "arrived";
export const AVAILABLE = "available";

const Building = (props) => {
    const [elevators, setElevators] = useState(generateElevators());
    const [floors, setFloors] = useState(generateFloors());
    const queue = [];

    const addFloorSelection = (targerFloor) => {
          queue.push(targerFloor);
          findClosetElevator();
     }

    const findClosetElevator = () => {

      if(queue.length > 0) {

        const availableElevator = elevators.filter(e => e.state === AVAILABLE);

        if(availableElevator.length > 0){
          const floorDestinationIndex = queue.pop();
          const distances = availableElevator.map((e, i) => {
              return { distance: Math.abs(floorDestinationIndex - e.currentFloor), elevatorIndex: i }
          });
          const nearestElevator = distances.reduce((prev, curr) => prev.distance < curr.distance ? prev : curr);
          MoveElevator(nearestElevator,floorDestinationIndex);
       }
      }
    };

      const MoveElevator = (nearestElevator,floorDestinationIndex ) => {
        let elevator = elevators[nearestElevator.elevatorIndex];
            elevator.targerFloor = floorDestinationIndex;
            elevator.state = MOVING;

            let updateElevators = elevators.map((e, i) => {
                if (i === nearestElevator.elevatorIndex)
                  return elevator;
                return e;
              });
            setElevators(updateElevators);
        }

        const onTransitionEnd = (elevatorId) => {
          setElevatorArrivedToFloor(elevatorId);
    
          setTimeout(() => {
            setElevatorAvailable(elevatorId);
          }, 2000);    
        }

        const setElevatorArrivedToFloor = (elevatorId) =>{
            let elevator = elevators[elevatorId];
            elevator.state = ARRIVED;
            elevator.currentFloor = elevator.targerFloor;

            let updateElevators = elevators.map((e, i) => {
              if (i === elevatorId)
                return elevator;
              return e;
            });
            setElevators(updateElevators);
      
            let floor = floors[elevator.targerFloor];
            floor.isArrived = true;
            let updateFloors = floors.map((e, i) => {
              if (i === elevator.targerFloor)
                return floor;
              return e;
            });
            setFloors(updateFloors);
         }
    
         const setElevatorAvailable = (elevatorId) =>{
            let elevator = elevators[elevatorId];
            elevator.state = AVAILABLE;

            let updateElevators = elevators.map((e, i) => {
              if (i === elevatorId)
                return elevator;
              return e;
            });
            setElevators(updateElevators);

            let floor = floors[elevator.currentFloor];
            floor.isArrived = false;

            let updateFloors = floors.map((e, i) => {
              if (i === elevator.targerFloor)
                return floor;
              return e;
            });
            setFloors(updateFloors);
         }

        const shaftsMap = () =>{
            const shaftsArr = [];
            for(let i = 0; i < 5; i++){
              shaftsArr.push(<Shaft floorsNumber = {props.floorsNumber} id={i} elevator={elevators[i]} onTransitionEnd={onTransitionEnd} />);
            }
            return shaftsArr;
          }
       
        return (
          <div className="BuildingContainer">
            <FloorLabels/>
            {shaftsMap()}
            <SidebarButtons addFloorSelection = {addFloorSelection} floors = {floors} />
          </div>
      );

}

export const generateElevators = () => {

    const elevators = [
      { id: 0, currentFloor: 0, targerFloor: 0, state: "available" },
      { id: 1, currentFloor: 0, targerFloor: 0, state: "available"},
      { id: 2, currentFloor: 0, targerFloor: 0, state: "available" },
      { id: 3, currentFloor: 0, targerFloor: 0, state: "available" },
      { id: 4, currentFloor: 0, targerFloor: 0, state: "available" }];
    return elevators;
  };

  export const generateFloors = () => {
    const Floors = [
      {floorNumber : 0, isArrived : false},
      {floorNumber : 1, isArrived : false},
      {floorNumber : 2, isArrived : false},
      {floorNumber : 3, isArrived : false},
      {floorNumber : 4, isArrived : false},
      {floorNumber : 5, isArrived : false},
      {floorNumber : 6, isArrived : false},
      {floorNumber : 7, isArrived : false},
      {floorNumber : 8, isArrived : false},
      {floorNumber : 9, isArrived : false}];
    return Floors;
};

export default Building;
