import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div>{props.date}</div>
      <div className="expense-itemdescription">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-itemprice">${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;