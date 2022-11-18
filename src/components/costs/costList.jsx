import React from "react";
import CostItem from "./costItem";
import "./costList.css";

function CostList(props) {
  if (props.costs.length === 0) {
    return <h2 className="cost-list__fallback">У цьому році витрат немає</h2>;
  }
  return (
    <ul className="cost-list">
      {props.costs.map((el) => (
        <CostItem
          key={el.id}
          date={el.date}
          description={el.description}
          amount={el.amount}
        />
      ))}
    </ul>
  );
}

export default CostList;
