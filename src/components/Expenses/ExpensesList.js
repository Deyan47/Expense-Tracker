import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">No expenses for this year.</h2>
    );
  }

  return (
    <ul className="expenses-list" style={{ listStyle: "none" }}>
      {props.items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpensesList;
