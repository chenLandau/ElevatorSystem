import Elevator from "./Elevator";
import "../resources/styles.css"

const Floor = (props) => {
    const {floorNumber,elevator,onTransitionEnd} = props; 

    if(floorNumber === 0)
    return <div className="FloorContainer">
       <Elevator elevator={elevator} onTransitionEnd={onTransitionEnd}/>
    </div>
        else
    return <div className="FloorContainer">
    </div>
}

export default Floor;