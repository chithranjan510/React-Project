import { useState } from "react";


import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const expenseYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onExpenseYear={expenseYearHandler}
      />
      <ExpenseChart expenses = {filteredExpenses}/>
      <ExpensesList items = {filteredExpenses}/>
    </Card>
  );
};

export default Expenses;
