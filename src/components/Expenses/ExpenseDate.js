import "./ExpenseDate.css";

function ExpenseDate(dateProps) {
  const month = dateProps.expenseDate.toLocaleString("en-US", {
    month: "long",
  });
  const day = dateProps.expenseDate.toLocaleString("en-US", { day: "2-digit" });
  const year = dateProps.expenseDate.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
      {/* {expenseDate.toISOString()} */}
    </div>
  );
}

export default ExpenseDate;
