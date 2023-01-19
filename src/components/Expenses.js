import './Expenses.css';

import ExpenseItem from './ExpenseItem';

function Expenses(expenseProps) {
    return (<div className='expenses'>
        <ExpenseItem expenseData={expenseProps.expenses[0]} />
        <ExpenseItem expenseData={expenseProps.expenses[1]} />
        <ExpenseItem expenseData={expenseProps.expenses[2]} />
        <ExpenseItem expenseData={expenseProps.expenses[3]} />
    </div>);
}

export default Expenses;
