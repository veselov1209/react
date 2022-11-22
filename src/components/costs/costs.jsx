import React, { useState } from "react";
import Card from "../UI/card";
import "./costs.css";
import CostsFilter from "./costsFilter";
import CostList from "./costList";
import CostsDiagram from "./costsDiagram";

function Costs(props) {
  const [selectedYear, setSelectedYear] = useState("2021");

  const filteredCosts = props.costs.filter(
    (el) => el.date.getFullYear().toString() === selectedYear
  );

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <div>
      <Card className="costs">
        <CostsFilter onChangeYear={yearChangeHandler} year={selectedYear} />
        <CostsDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
}

export default Costs;
