import "./ExpenseDate.css";

function ExpenseDate(props) {
  const expMonth = props.expDate.toLocaleString("en-UK", { month: "long" });
  const expDay = props.expDate.toLocaleString("en-UK", { day: "2-digit" });
  const expYear = props.expDate.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date_month">{expMonth}</div>
      <div className="expense-date__year">{expYear}</div>
      <div className="expense-date__day">{expDay}</div>
    </div>
  );
}

export default ExpenseDate;
