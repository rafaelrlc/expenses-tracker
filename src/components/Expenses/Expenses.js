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
  
  const filteredExpense = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear || filteredYear === "all";
  })


  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onSaveExpenseYear={saveYearSearch}
        ></ExpenseFilter>
        {filteredExpense.map((expense) => (
          <ExpenseItem
            key={expense.id}  //key is used to identify each element in the array
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))}
      </Card>
    </div>
  );
};
export default Expenses;
