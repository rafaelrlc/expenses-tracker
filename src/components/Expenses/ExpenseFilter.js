import React, { useState } from "react";
import "./ExpenseFilter.css";
import Card from "../UI/Card";

const ExpenseFilter = (props) => {
  const [enteredYear, setEnteredYear] = useState("");

  const getSelectedYear = (event) => {
    setEnteredYear(event.target.value);
  };

  const searchForYear = () => {
    const yearSearch = {
      year: enteredYear,
    };
    props.onSaveExpenseYear(yearSearch);
  };

  return (
    <Card className="expense-filter">
      <div className="year-choice">
        <div className="year-div">
          <select className="year-choose" onChange={getSelectedYear}>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
          </select>
        </div>
        <div>
          <button onClick={searchForYear}>Filter by Year</button>
        </div>
      </div>
      <div className="amount-per-year">
        <div className="month-div">
          <h5 className="month-name">JAN</h5>
        </div>
        <div className="month-div"></div>
        <div className="month-div"></div>
        <div className="month-div"></div>
        <div className="month-div"></div>
        <div className="month-div"></div>
        <div className="month-div"></div>
        <div className="month-div"></div>
        <div className="month-div"></div>
        <div className="month-div"></div>
        <div className="month-div"></div>
        <div className="month-div"></div>
      </div>
    </Card>
  );
};

export default ExpenseFilter;
