import './ExpenseItem.css';

function ExpenseItem(props) {
    // note that month and day starts with 0, so 3 is April, 12 is 13th
    // const expenseDate = new Date(2021, 3, 12);
    // const expenseTitle = 'Rubbish Cleaning Fee';
    // const expenseAmount = 689.777;
    
  return (
    <div className='expense-item'>
        {/* have to use toISOString() to print the date*/}
      <div>{props.date.toISOString()}</div>
      <div className='expense-item__description'>
          <h2>{props.title}</h2>
          </div>
      <div className='expense-item__price'>${props.amount}</div>
    </div>
  );
}

export default ExpenseItem;
