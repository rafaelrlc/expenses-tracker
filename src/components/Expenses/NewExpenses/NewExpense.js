import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseAddButton from "./ExpenseAddButton";

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

  const changeScreen = () => {
    if (newExpenseForm === addButton) {
      changeOpiton(formExpense)
    }
    else {
      changeOpiton(addButton)
    }
  }

  const goBack = () => {
    changeOpiton(addButton)
  }

  ////////////////////////////////////////////////////////////////////////////////
  const addButton = <ExpenseAddButton changeTela={changeScreen} ></ExpenseAddButton>;
  const formExpense = (<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={goBack}></ExpenseForm>);

  const [newExpenseForm, changeOpiton] = useState(addButton)
  ////////////////////////////////////////////////////////////////////////////////

  return <div className="new-expense">{newExpenseForm}</div>;
};

export default NewExpense;
