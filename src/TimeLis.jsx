import { useContext } from "react";
import Item from "./Item";
import { testContext } from "./testContext";

const TimeList = () => {
  const context = useContext(testContext);

  return (
    <div className="Main_time_list">
      {context.timeArr.map((c, index) => (
        <Item key={index} value={c}>
          {c}
        </Item>
      ))}
    </div>
  );
};

export default TimeList;
