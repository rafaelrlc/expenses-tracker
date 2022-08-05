import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      date: "2020-01-01",
      title: "Car Insurance",
      amount: 250.45,
    },
    {
      id: "e2",
      date: "2020-01-03",
      title: "Taxes",
      amount: 900.45,
    },
    {
      id: "e3",
      date: "2022-01-04",
      title: "Rent",
      amount: 2255.15,
    },
    {
      id: "e4",
      date: "2022-01-05",
      title: "Groceries",
      amount: 167.25,
    },
  ];

  return (
    <div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
       <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;