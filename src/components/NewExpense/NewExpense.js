import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
// import ExpenseForm from './ExpenseFormSingleState';
import "./NewExpense.css";

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	// expects "enteredExpenseData"(data) as param from ExpenseForm (child)
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		console.log(expenseData);

		// call func from App.js (parent)
		props.onAddExpense(expenseData);
		setIsEditing(false);
	};

	const startEditingHandler = () => {
		setIsEditing(true);
	};

	const stopEditingHandler = () => {
		setIsEditing(false);
	};

	return (
		<div className="new-expense">
			{!isEditing && (
				<button onClick={startEditingHandler}>Add New Expense</button>
			)}
			{isEditing && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseDataHandler}
					onCancel={stopEditingHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
