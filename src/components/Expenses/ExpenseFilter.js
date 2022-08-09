import "./ExpenseFilter.css";
import Card from "../UI/Card";
const ExpenseFilter = (props) => {
  return (
    <Card className="expense-filter">
      <div className="year-choice">
        <h4>Filter by Year</h4>
        <div>
          <label htmlFor="expense-title">Year:</label>
          <input type="text" />
        </div>
      </div>
      <div className="amount-per-year">
        <div className="month-div">
          <h5 className="month-name">JAN</h5>
        </div>
        <div className="month-div"></div>
        <div className="month-div"></div>
        <div className="month-div"></div>
        <div className="month-div"></div>
        <div className="month-div"></div>
        <div className="month-div"></div>
        <div className="month-div"></div>
        <div className="month-div"></div>
        <div className="month-div"></div>
        <div className="month-div"></div>
        <div className="month-div"></div>
      </div>
    </Card>
  );
};

export default ExpenseFilter;
