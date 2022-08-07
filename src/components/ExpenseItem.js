import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.data} />
      <div className="expense-itemdescription">
        <h2>{props.titulo}</h2>
      </div>
      <div className="expense-itemprice">${props.valor}</div>
    </div>
  );
}

export default ExpenseItem;
