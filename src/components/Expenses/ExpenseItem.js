import React from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-itemdescription">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-itemprice">${props.amount}</div>
    </Card>
  );
};

export default ExpenseItem;
