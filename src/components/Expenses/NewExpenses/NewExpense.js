import React from "react";
import "./NewExpense.css";
import ExpenseAddButton from "../ExpenseAddButton";

import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  ////////////////////////////////////////////////////////////////////////////////
  const addButton = <ExpenseAddButton></ExpenseAddButton>;
  const newExpeneseForm = (
    <ExpenseForm onSaveExpense={saveExpenseDataHandler}></ExpenseForm>
  );

  let newExpense = null;
  ////////////////////////////////////////////////////////////////////////////////

  return <div className="new-expense">{newExpeneseForm}</div>;
};

export default NewExpense;
