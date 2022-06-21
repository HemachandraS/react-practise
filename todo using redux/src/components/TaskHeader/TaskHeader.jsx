import React from "react";
import { useSelector } from "react-redux";
import { store } from "../../redux/store";
import styles from "./taskHeader.module.css";
// import data from "../../data/tasks.json";
const TaskHeader = () => {
  // sample values to be replaced
const todoData = useSelector((store)=>store.todo)
  let val = todoData.filter((ele) => ele.done == false);
  let totalTask = todoData.length || 0;
  let unCompletedTask = val.length || 0;

  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-header" className={styles.taskHeader}>
      You have <b data-testid="header-remaining-task">{unCompletedTask}</b>of
      <b data-testid="header-total-task">{totalTask}</b> tasks remaining
    </div>
  );
};

export default TaskHeader;
