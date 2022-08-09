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
          <label htmlFor="expense-title">Year:</label>
          <input type="text" onChange={getSelectedYear} />
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
