import "./ExpenseFilter.css";
//import Card from "../UI/Card";

const ExpenseFilter = (props) => {
  const getSelectedYear = (event) => {
    props.onSaveExpenseYear(event.target.value);
  };

  return (
    <div className="expense-filter">
      <h5 className="by-year">Filter by Year</h5>
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
          <option value="all">...</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
