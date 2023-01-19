import "./Expenses.css";

import Card from "./../UI/Card";
import ExpenseItem from "./ExpenseItem";

function Expenses(expenseProps) {
  return (
    <Card className="expenses">
      <ExpenseItem expenseData={expenseProps.expenses[0]} />
      <ExpenseItem expenseData={expenseProps.expenses[1]} />
      <ExpenseItem expenseData={expenseProps.expenses[2]} />
      <ExpenseItem expenseData={expenseProps.expenses[3]} />
    </Card>
  );
}

export default Expenses;
