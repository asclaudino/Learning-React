import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpensesFilter.css";
import React, { useState } from "react";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2020");

  const onYearFilterHandler = (choosenYear) => {
    setSelectedYear(choosenYear);
  };

  const expensesFiltered = props.items.filter((expense) => {
    return expense.date.getFullYear() === Number(selectedYear);
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onYearFilter={onYearFilterHandler}
          selected={selectedYear}
          className="expenses-filter"
        ></ExpensesFilter>
        {expensesFiltered.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
