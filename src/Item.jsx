import { useContext } from "react";
import { testContext } from "./testContext";

const Item=(props)=>{
    const context=useContext(testContext);
    return (
        <div style={{color:context}}>{props.children} </div>
    )

}

export default Item;