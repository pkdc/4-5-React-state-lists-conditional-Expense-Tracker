import React, { useState } from "react";
import "./ExpenseForm.css";

// Multiple States
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // formShown indicates whether the add new expense form 
  // is hidden or shown default value is hidden
  const [formShown, setFormShown] = useState(false);

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // Note: the console.log will not show the
    // most updated value
    // console.log(enteredTitle);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // console.log(enteredAmount);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // console.log(enteredDate);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  // flip the formShown state
  const toggleHandler = () => {
    // overwrite btn
    setFormShown(!formShown);
  };

  let toggleForm = (
    <div className="new-expense__actions">
      <button onClick={toggleHandler}>Add New Expense</button>
    </div>
  );

  let toggleForm2 = (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Expense Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={toggleHandler}>Cancel</button>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );

  return (
    <div>
      {!formShown && toggleForm}
      {formShown && toggleForm2}
    </div>
  );
};

export default ExpenseForm;
