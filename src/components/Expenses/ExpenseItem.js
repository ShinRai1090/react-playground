import "./ExpenseItem.css";
import Card from "./../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (expenseProps) => {
  const {
    date: expenseDate,
    title: expenseTitle,
    amount: expenseAmount,
  } = expenseProps.expenseData;

  const clickHandler = () => {
    console.log('Clicked');
  };

  /* return <h2>Expense Item!</h2> */
  return (
    <Card className="expense-item">
      <ExpenseDate expenseDate={expenseDate} />
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
