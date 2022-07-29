import './ExpenseForm.css';
import {useState} from "react";

function ExpenseForm(props) {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  }

  const amountChangeHandler = event => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value
    });
  }

  const dateChangeHandler = event => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value
    });
  }

  const submitHandler = event => {
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate)
    }

    props.onSaveExpenseData(expenseData);

    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: ''
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="Title">Title</label>
          <input type="text"
                 value={userInput.enteredTitle}
                 onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label htmlFor="Amount">Amount</label>
          <input type="number"
                 value={userInput.enteredAmount}
                 min="0.01" step="0.01"
                 onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input type="date"
                 value={userInput.enteredDate}
                 min="2022-01-01" max="2023-01-01"
                 onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;