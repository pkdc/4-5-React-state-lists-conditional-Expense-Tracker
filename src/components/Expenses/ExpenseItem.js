import React, {useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from '../UI/Card';

const ExpenseItem = props => {
  // note that month and day starts with 0, so 3 is April, 12 is 13th
  // const expenseDate = new Date(2021, 3, 12);
  // const expenseTitle = 'Rubbish Cleaning Fee';
  // const expenseAmount = 689.777;

  const [title, setTitle] = useState(props.title);

  const changeHandler = () => {
    setTitle('New Title');
  };

  return (
    <Card className="expense-item">
      {/* have to use toISOString() to print the date*/}
      <ExpenseDate expDate={props.date} />
      <article className="expense-item__description">
        <h2>{title}</h2>
      </article>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={changeHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
