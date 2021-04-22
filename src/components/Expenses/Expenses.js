import React from 'react';
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from '../UI/Card';

const Expenses = props => {
  return (
    <Card className='expenses'>
      <ExpenseItem
        title={props.expenseArray[0].title}
        amount={props.expenseArray[0].amount}
        date={props.expenseArray[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenseArray[1].title}
        amount={props.expenseArray[1].amount}
        date={props.expenseArray[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenseArray[2].title}
        amount={props.expenseArray[2].amount}
        date={props.expenseArray[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenseArray[3].title}
        amount={props.expenseArray[3].amount}
        date={props.expenseArray[3].date}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
