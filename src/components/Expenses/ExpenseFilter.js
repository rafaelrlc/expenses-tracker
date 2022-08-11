import "./ExpenseFilter.css";
import Card from "../UI/Card";

const ExpenseFilter = (props) => {

  const getSelectedYear = (event) => {
    props.onSaveExpenseYear(event.target.value);
  };

  return (
    <Card className="expense-filter">
      <div className="year-div">
        <select
          className="year-choose"
          value={props.selected}
          onChange={getSelectedYear}
        >
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="all">All</option>
        </select>
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
