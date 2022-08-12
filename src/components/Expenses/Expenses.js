import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

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
        <ExpensesChart expenses={filteredExpense}></ExpensesChart>
        <ExpenseList items={filteredExpense}></ExpenseList>
      </Card>
    </div>
  );
};
export default Expenses;
