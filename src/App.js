//import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpenses/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      date: new Date(2022, 10, 20),
      title: "Car Insurance",
      amount: 250.45,
    },
    {
      id: "e2",
      date: new Date(2022, 10, 25),
      title: "Taxes",
      amount: 900.45,
    },
    {
      id: "e3",
      date: new Date(2022, 11, 12),
      title: "Rent",
      amount: 2255.15,
    },
    {
      id: "e4",
      date: new Date(2022, 11, 9),
      title: "Groceries",
      amount: 167.25,
    },
    {
      id: "e5",
      date: new Date(2022, 11, 10),
      title: "Gás",
      amount: 100.45,
    },
  ];

  const addExpenseHandler = (newExpense) => {
    console.log("in App.js");
    console.log(newExpense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
