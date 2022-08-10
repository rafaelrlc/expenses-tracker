//import ExpenseItem from "./components/ExpenseItem";
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpenses/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    date: new Date(2022, 10, 20),
    title: "Car Insurance",
    amount: 250.45,
  },
];

const App = () => {
  const [expenses, setUpdatedExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (newExpense) => {
    setUpdatedExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
