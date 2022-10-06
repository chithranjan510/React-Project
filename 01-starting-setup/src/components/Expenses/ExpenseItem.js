import {useState} from 'react'

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);
  const [expense, setExpense] = useState(props.amount);

  const clickHandler = () => {
    setTitle('Upadeted!!!');
    // console.log(title);
  }

  const expenseClickHandler = () => {
    setExpense('100');
    // console.log(title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">Rs {expense}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={expenseClickHandler}>Change Expense</button>
    </Card>
  );
}

export default ExpenseItem;
