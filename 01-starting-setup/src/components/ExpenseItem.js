import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

export default function Expenseitem({ expense }) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={expense.date} />
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
        <div className="expense-item__price">
          ${expense.amount.toLocaleString()}
        </div>
      </div>
    </Card>
  );
}
