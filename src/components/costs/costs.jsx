import React, { useState } from "react";
import CostItem from "./costItem";
import Card from "../UI/card";
import "./costs.css";
import CostsFilter from "./costsFilter";

function Costs(props) {
  const [selectedYear, setSelectedYear] = useState("2021");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <div>
      <Card className="costs">
        <CostsFilter onChangeYear={yearChangeHandler} year={selectedYear} />
        {props.costs.map((el) => (
          <CostItem
            date={el.date}
            description={el.description}
            amount={el.amount}
          />
        ))}
      </Card>
    </div>
  );
}

export default Costs;
