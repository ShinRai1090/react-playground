import "./ExpenseItem.css";

function ExpenseItem(expenseProps) {
  const {date: expenseDate, title: expenseTitle, amount: expenseAmount} = expenseProps.expenseData;

  /* return <h2>Expense Item!</h2> */
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
