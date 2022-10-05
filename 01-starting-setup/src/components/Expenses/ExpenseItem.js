import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {

  const clickHandler = () => {
    console.log('Clicked!!!')
  }

  const deleteHandler = (e) => {
    e.target.parentElement.remove();
    console.log('Deleted!!!')
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs {props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteHandler}>Delete Item</button>
    </Card>
  );
}

export default ExpenseItem;
