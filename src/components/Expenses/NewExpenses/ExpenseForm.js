import React, { useState } from "react";
import "./ExpenseForm.css";
import Card from "../../UI/Card";
const ExpenseForm = (props) => {
  //const [userInput, setUserInput] = useState({
  //enteredTitle: "",
  //enteredAmount: "",
  //enteredDate: "",
  //});

  //const titleChangeHandler = (event) => {
  //setUserInput((prevState) => {
  //return {...prevState, enteredTitle: event.target.value}
  //})
  //};

  //const amountChangeHandler = (event) => {
  //setUserInput((prevState) => {
  //return {...prevState, enteredAmount: event.target.value}
  //})
  //};

  //const dateChangeHandler = (event) => {
  //setUserInput((prevState) => {
  //return {...prevState, enteredDate: event.target.value}
  //})
  //};

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    //o event é o que mudou , ele é chamado automaticamente quando a funcao é ativada
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <Card className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="expense-title">Title</label>
          <input
            type="text"
            value={enteredTitle}
            id="expense-title"
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="expense-title">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            id="expense-title"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="expense-title">Date</label>
          <input
            type="date"
            value={enteredDate}
            min="01-01-2019"
            max="31-12-2022"
            id="expense-title"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button className="new-expense__button_cancel" type="submit">
            Cancel
          </button>
          <button className="new-expense__button_add" type="submit">
            Add Expense
          </button>
        </div>
      </Card>
    </form>
  );
};

export default ExpenseForm;
