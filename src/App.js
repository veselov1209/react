import Costs from "./components/costs/costs";
import CostItem from "./components/costs/costItem";
import NewCost from "./components/costs/newCost/newCost";

const costs = [
  {
    id: "c1",
    date: new Date(2021, 3, 12),
    description: "Холодильник",
    amount: 999.99,
  },
  {
    id: "c2",
    date: new Date(2021, 12, 25),
    description: "MacBook",
    amount: 1254.99,
  },
  {
    id: "c3",
    date: new Date(2021, 4, 1),
    description: "Джинсы",
    amount: 49.99,
  },
];
function App() {
  const addCostHandler = (cost) => {
    console.log(cost);
    console.log("app");
  };
  return (
    <>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </>
  );
}

export default App;
