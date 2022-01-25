import React, { useState } from "react";
import "./ExpenseForm.css";

// Multiple States
const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredDate, setEnteredDate] = useState("");

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

		// pack state slices tgt
		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};

		// onSaveExpenseData is from parent compo
		props.onSaveExpenseData(expenseData);

		// reset to empty string after saving
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredDate("");
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label for="title">Title</label>
					<input
						type="text"
						id="title"
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
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
