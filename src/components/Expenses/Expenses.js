import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = props => {
  const [filterYear, setFilterYear] = useState('');

  const pickYearFilterHandler = pickedYear => {
    // console.log("Expenses.js");
    // console.log(pickedYear);
    setFilterYear(pickedYear);
    console.log(filterYear);
  };

  return (
    <Card className='expenses'>
      <ExpensesFilter onPickYear={pickYearFilterHandler}/>
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
