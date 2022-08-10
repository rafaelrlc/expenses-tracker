import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.data} />
      <div className="expense-itemdescription">
        <h2>{props.titulo}</h2>
      </div>
      <div className="expense-itemprice">${props.valor}</div>
    </Card>
  );
};

export default ExpenseItem;
