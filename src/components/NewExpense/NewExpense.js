import React from 'react';
import ExpenseForm from './ExpenseForm';
// import ExpenseForm from './ExpenseFormSingleState';
import './NewExpense.css';

const NewExpense = props => {

    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    return (
        <div className='new-expense'>
             {/*Note here the saveExpenseDataHandler didn't pass any data
             (thru binding or other means, 
             but the above handler def is expecting data*/}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
        )
};

export default NewExpense;