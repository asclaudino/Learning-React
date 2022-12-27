import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpensesFilter.css";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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
        <ExpensesChart expenses={expensesFiltered}></ExpensesChart>
        <ExpensesList items={expensesFiltered}></ExpensesList>
      </Card>
    </div>
  );
};

export default Expenses;
