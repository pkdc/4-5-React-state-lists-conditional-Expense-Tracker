import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const [filteredExpenses, setFilteredExpenses] = useState(props.items);
  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);

    const yearFilter = (filteredYearExpense) => {
      return filteredYearExpense.date.getFullYear().toString() === selectedYear;
    };

    setFilteredExpenses(props.items.filter(yearFilter));
    console.log(filteredExpenses);
    // how to pass the filteredExpenses outside?
    //  return?
    // Should add the item generating code inside,
    //  instead of trying to get filteredExpenses outside?
    // store in a state?
  };

  // const expenseEntries = ({props.items.map(expenseEntry => {
  //     <ExpenseItem
  //     title={expenseEntry.title}
  //     amount={expenseEntry.amount}
  //     date={expenseEntry.date} />
  //   })
  // });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {filteredExpenses.map((expenseEntry) => {
        return (
          <ExpenseItem
            key={expenseEntry.id}
            title={expenseEntry.title}
            amount={expenseEntry.amount}
            date={expenseEntry.date}
          />
        );
      })}
      {/* <ExpenseItem
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
      ></ExpenseItem> */}
    </Card>
  );
};

export default Expenses;
