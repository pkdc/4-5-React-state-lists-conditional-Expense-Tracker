import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((filteredYearExpense) => {
    return filteredYearExpense.date.getFullYear().toString() === filteredYear;
  });

  // default value to be override if filteredExpenses.length is > 0
  let expenseContent = <p>No Expenses</p>;

  if (filteredExpenses.length > 0) {
    // override the default value
    expenseContent = filteredExpenses.map((expenseEntry) => (
      <ExpenseItem
        key={expenseEntry.id}
        title={expenseEntry.title}
        amount={expenseEntry.amount}
        date={expenseEntry.date}
      />
  ))
  }
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {expenseContent}
      {/* using a JS trick of && operator always return the part after
       it, as a result of this overall check */}
      {/* {filteredExpenses.length === 0 && <p>No Expenses</p>}
      {filteredExpenses.length > 0 && filteredExpenses.map((expenseEntry) => (
          <ExpenseItem
            key={expenseEntry.id}
            title={expenseEntry.title}
            amount={expenseEntry.amount}
            date={expenseEntry.date}
          />
      ))} */}
    </Card>
  );
};

export default Expenses;
