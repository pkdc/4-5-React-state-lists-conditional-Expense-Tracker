import React from 'react';
import ExpenseForm from './ExpenseForm';
// import ExpenseForm from './ExpenseFormSingleState';
import './NewExpense.css';

const NewExpense = () => {
    return (
        <div className='new-expense'> 
            <ExpenseForm />
        </div>
        )
};

export default NewExpense;