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


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onYearFilter={onYearFilterHandler}
          selected={selectedYear}
          className="expenses-filter"
        ></ExpensesFilter>
        {props.items
          .filter(
            (expense) => expense.date.getFullYear() === Number(selectedYear)
          )
          .map((expense) => (
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
