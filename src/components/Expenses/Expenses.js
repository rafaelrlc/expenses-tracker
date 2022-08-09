import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        titulo={props.item[0].title}
        valor={props.item[0].amount}
        data={props.item[0].date}
      ></ExpenseItem>
      <ExpenseItem
        titulo={props.item[1].title}
        valor={props.item[1].amount}
        data={props.item[1].date}
      ></ExpenseItem>
      <ExpenseItem
        titulo={props.item[2].title}
        valor={props.item[2].amount}
        data={props.item[2].date}
      ></ExpenseItem>
      <ExpenseItem
        titulo={props.item[3].title}
        valor={props.item[3].amount}
        data={props.item[3].date}
      ></ExpenseItem>
      <ExpenseItem
        titulo={props.item[4].title}
        valor={props.item[4].amount}
        data={props.item[4].date}
      ></ExpenseItem>
    </Card>
  );
};
export default Expenses;