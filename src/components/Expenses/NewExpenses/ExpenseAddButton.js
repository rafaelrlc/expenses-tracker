import "./ExpenseAddButton.css";

const ExpenseAddButton = (props) => {
  const showForm = () => {
    props.changeTela()
  }
  return (
    <div className="add-button-box">
      <button className="add-expense-button" onClick={showForm}>Add New Expense</button>
    </div>
  );
};

export default ExpenseAddButton;
