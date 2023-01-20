import "./Expenses.css";

import Card from "./../UI/Card";
import ExpenseItem from "./ExpenseItem";

const Expenses = (expenseProps) => {
  return (
    <Card className="expenses">
      {expenseProps.expenses.map((expense) => (
        <ExpenseItem expenseData={expense} />
      ))}
      {/* <ExpenseItem expenseData={expenseProps.expenses[0]} />
      <ExpenseItem expenseData={expenseProps.expenses[1]} />
      <ExpenseItem expenseData={expenseProps.expenses[2]} />
      <ExpenseItem expenseData={expenseProps.expenses[3]} /> */}
    </Card>
  );
};

export default Expenses;
