import React, { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  let addExpenseButtonClicked = false;
  const [isEditing, setIsEditing] = useState(addExpenseButtonClicked);


  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">

      {isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler} />}

      {!isEditing && (
        <button onClick={startEditingHandler} className="new-expense__button">
          {" "}
          Add expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
