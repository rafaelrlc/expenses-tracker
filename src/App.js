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
  {
    id: "e2",
    date: new Date(2020, 10, 21),
    title: "Rent",
    amount: 500.45,
  },
  {
    id: "e3",
    date: new Date(2022, 10, 22),
    title: "Credit Card",
    amount: 100.45,
  },
  {
    id: "e4",
    date: new Date(2021, 3, 23),
    title: "Car Insurance",
    amount: 250.45,
  },
  {
    id: "e5",
    date: new Date(2020, 2, 24),
    title: "Food",
    amount: 800.35,
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
