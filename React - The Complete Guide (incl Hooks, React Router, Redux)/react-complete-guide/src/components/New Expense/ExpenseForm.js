import './ExpenseForm.css';
import {useState} from "react";

function ExpenseForm() {
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.title.value };
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

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="Title">Title</label>
          <input type="text" onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label htmlFor="Amount">Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input type="date" min="2022-01-01" max="2023-01-01" onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;