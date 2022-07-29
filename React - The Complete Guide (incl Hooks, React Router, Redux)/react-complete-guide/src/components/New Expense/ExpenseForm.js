import './ExpenseForm.css';

function ExpenseForm() {
  const titleChangeHandler = (event) => {
    console.log('Title changed = ' + event.target.value);
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
          <input type="number" min="0.01" step="0.01"/>
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input type="date" min="2022-01-01" max="2023-01-01"/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;