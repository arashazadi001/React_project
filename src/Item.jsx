import { useContext } from "react";
import { testContext } from "./testContext";

const Item = (props) => {
  const context = useContext(testContext);

  const handleDeleteItem = () => {
    const valueToRemove = props.value;
    context.setTimeArr(
      context.timeArr.filter(t => t !== valueToRemove)
    );
  };

  return (
    <div onClick={handleDeleteItem} style={{ cursor: "pointer" }}>
      {props.children}
    </div>
  );
};

export default Item;
