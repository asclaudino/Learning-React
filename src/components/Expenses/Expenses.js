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

  // const expensesListComponents = () => {
  //   const expensesFiltered = props.items.filter(
  //     (expense) => toString(expense.date.getFullYear()) === selectedYear
  //   );
  //   return expensesFiltered.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     ></ExpenseItem>
  //   ));
  // };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onYearFilter={onYearFilterHandler}
          selected={selectedYear}
          className="expenses-filter"
        ></ExpensesFilter>
        {/* {expensesListComponents()} */}
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
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItem> */}
      </Card>
    </div>
  );
};

export default Expenses;
