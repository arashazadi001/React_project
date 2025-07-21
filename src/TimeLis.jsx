import Item from "./Item";

const TimeList = (props) => {
    return (
        <div className="Main_time_list">
            {props.children.map((c, index) => (
                <Item key={Math.random()}>{c}</Item>
            ))}
        </div>
    );
};

export default TimeList;


