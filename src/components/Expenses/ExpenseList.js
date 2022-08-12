import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  const noExpenseStyle = {
    color: "white",
    fontSize: "1.5rem",
    textAlign: "center",
    marginTop: "3rem",
    fontWeight: "bold",
    backgroundColor: "#4b4b4b",
    padding: "1.35rem",
    borderRadius: "5.5px",
  };

  let expenseContent = <p style={noExpenseStyle}>No expenses found</p>;

  if (props.items.length === 0) {
    return expenseContent;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
