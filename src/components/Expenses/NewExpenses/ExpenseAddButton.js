import "./ExpenseAddButton.css";
import Card from "../../UI/Card";

const ExpenseAddButton = (props) => {
  const showForm = () => {
    props.changeTela();
  };
  return (
    <Card className="add-button-box">
      <button className="add-expense-button" onClick={showForm}>
        Add New Expense
      </button>
    </Card>
  );
};

export default ExpenseAddButton;
