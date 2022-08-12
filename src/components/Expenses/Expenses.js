import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("all");

  const saveYearSearch = (enteredYear) => {
    setFilteredYear(enteredYear);
  };

  const filteredExpense = props.item.filter((expense) => {
    return (
      expense.date.getFullYear().toString() === filteredYear ||
      filteredYear === "all"
    );
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onSaveExpenseYear={saveYearSearch}
        ></ExpenseFilter>
        <ExpenseList items={filteredExpense}></ExpenseList>
      </Card>
    </div>
  );
};
export default Expenses;
