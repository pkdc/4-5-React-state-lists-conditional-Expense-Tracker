import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  // ignored if length is not 0
  if (props.filteredItems.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.filteredItems.map((expenseEntry) => (
        <ExpenseItem
          key={expenseEntry.id}
          title={expenseEntry.title}
          amount={expenseEntry.amount}
          date={expenseEntry.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
