import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const clickHandler = () => {
    setTitle("Clicked");
  };
  const [title, setTitle] = useState(props.titulo);

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.data} />
      <div className="expense-itemdescription">
        <h2>{title}</h2>
      </div>
      <div className="expense-itemprice">${props.valor}</div>
      <button onClick={clickHandler}>Update</button>
    </Card>
  );
};

export default ExpenseItem;
