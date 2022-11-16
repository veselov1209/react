import React, { useState } from "react";
import "./costForm.css";

function CostForm(props) {
  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  const nameChangeHandler = (event) => {
    setInputName((prevState) => event.target.value);
  };

  const amountChangeHandler = (event) => {
    setInputAmount((prevState) => event.target.value);
  };

  const dateChangeHandler = (event) => {
    setInputDate((prevState) => event.target.value);
  };

  //   const [userInput, setUserInput] = useState({
  //     name: "",
  //     amount: "",
  //     date: "",
  //   });

  //   const nameChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //       return { ...prevState, name: event.target.value };
  //     });
  //   };

  //   const amountChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //       return { ...prevState, amount: event.target.value };
  //     });
  //   };

  //   const dateChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //       return { ...prevState, date: event.target.value };
  //     });
  //   };
  //   console.log(userInput);
  const submitHandler = (event) => {
    event.preventDefault();
    const costData = {
      name: inputName,
      amount: inputAmount,
      date: new Date(inputDate),
    };
    setInputName("");
    setInputAmount("");
    setInputDate("");
    props.onSaveCostData(costData);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="new-cost__controls">
          <div className="new-cost__control">
            <label>Название</label>
            <input type="text" onChange={nameChangeHandler} value={inputName} />
          </div>
          <div className="new-cost__control">
            <label>Сумма</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={inputAmount}
            />
          </div>
          <div className="new-cost__control">
            <label>Дата</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
              value={inputDate}
            />
          </div>
          <div className="new-cost__actions">
            <button type="submit">Добавить расход</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CostForm;
