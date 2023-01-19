import "./ExpenseItem.css";

function ExpenseItem(expenseProps) {
  const {
    date: expenseDate,
    title: expenseTitle,
    amount: expenseAmount,
  } = expenseProps.expenseData;

  const month = expenseDate.toLocaleString('en-US', {month: 'long'});
  const day = expenseDate.toLocaleString('en-US', {day: '2-digit'});
  const year = expenseDate.getFullYear();

  /* return <h2>Expense Item!</h2> */
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
        {/* {expenseDate.toISOString()} */}
      </div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
