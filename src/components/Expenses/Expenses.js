import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const saveYearSearch = (enteredYear) => {
    setFilteredYear(enteredYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onSaveExpenseYear={saveYearSearch}
        ></ExpenseFilter>
        <ExpenseItem
          titulo={props.item[0].title}
          valor={props.item[0].amount}
          data={props.item[0].date}
        ></ExpenseItem>
        <ExpenseItem
          titulo={props.item[1].title}
          valor={props.item[1].amount}
          data={props.item[1].date}
        ></ExpenseItem>
        <ExpenseItem
          titulo={props.item[2].title}
          valor={props.item[2].amount}
          data={props.item[2].date}
        ></ExpenseItem>
        <ExpenseItem
          titulo={props.item[3].title}
          valor={props.item[3].amount}
          data={props.item[3].date}
        ></ExpenseItem>
        <ExpenseItem
          titulo={props.item[4].title}
          valor={props.item[4].amount}
          data={props.item[4].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
};
export default Expenses;
